/** Our wonderfull little clock **/
class Clock {

  /**
   * Clock initialization
   */
  constructor() {
    this.hourHand = document.querySelector('.hour.arm');
    this.minuteHand = document.querySelector('.minute.arm');
    this.secondHand = document.querySelector('.second.arm');
    this.timer();

    setInterval(() => this.timer(), 1000);
  }

  /**
   * Timer of the clock
   */
  timer() {
    this.sethandRotation('hour');
    this.sethandRotation('minute');
    this.sethandRotation('second');
  }

  sethandRotation(arm) {
    let date = new Date(),
      hours, minutes, seconds, percentage, degree;

    switch (arm) {
      case 'hour':
        hours = date.getHours();
        arm = this.hourHand;
        percentage = this.numberToPercentage(hours, 12);
        break;
      case 'minute':
        minutes = date.getMinutes();
        arm = this.minuteHand;
        percentage = this.numberToPercentage(minutes, 60);
        break;
      case 'second':
        seconds = date.getSeconds();
        arm = this.secondHand;
        percentage = this.numberToPercentage(seconds, 60);
        break;
    }


    degree = this.percentageToDegree(percentage);
    arm.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;
  }

  numberToPercentage(number = 0, max = 60) {
    return number / max * 100;
  }

  percentageToDegree(percentage = 0) {
    return percentage * 360 / 100;
  }
}



let clock = new Clock();
