/**
 * Web Audio API synthesizer for interactive audio preview in Fleamaster
 */

class LoFiSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private currentChordIndex = 0;
  private masterGain: GainNode | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playChords(chords: number[][]) {
    this.init();
    if (!this.ctx || !this.masterGain) return;

    this.stop();
    this.isPlaying = true;
    this.currentChordIndex = 0;

    const playNext = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const currentChord = chords[this.currentChordIndex % chords.length];
      this.currentChordIndex++;

      const now = this.ctx.currentTime;
      const duration = 2.4;

      // Filter for warm lo-fi tape sound
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 0.4);
      filter.frequency.exponentialRampToValueAtTime(600, now + duration);
      filter.connect(this.masterGain);

      // Play each note in the chord with soft attack & release
      currentChord.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();

        // Warm triangle/sine blend
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Detune slightly for lush chorus vibe
        osc.detune.setValueAtTime((i % 2 === 0 ? 1 : -1) * (i * 2.5), now);

        // ADSR envelope
        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.linearRampToValueAtTime(0.08, now + 0.3);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(noteGain);
        noteGain.connect(filter);

        osc.start(now);
        osc.stop(now + duration);
      });
    };

    // Play first immediately
    playNext();
    // Repeat every 2.4s
    this.intervalId = window.setInterval(playNext, 2400);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const synth = new LoFiSynthesizer();
