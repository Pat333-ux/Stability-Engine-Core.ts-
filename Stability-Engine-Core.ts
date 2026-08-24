export class StabilityEngine {
  constructor() {
    this.checks = [];
  }

  addCheck(fn) {
    this.checks.push(fn);
  }

  assess(context) {
    const results = this.checks.map(c => c(context));
    const failures = results.filter(r => r === false).length;
    return failures === 0 ? "Stable" : `Unstable: ${failures} issues`;
  }
}
