import { action, computed, makeAutoObservable, observable, runInAction } from 'mobx'

class AppleStore {

  constructor() {
    makeAutoObservable(this, {
      pickApple: true,
      eatApple: true,
    }, {
      autoBind: true
    })
  }
  apples = [
    {
      index: 0,
      weight: 288,
      actived: true
    },
    {
      index: 1,
      weight: 252,
      actived: true
    },
    {
      index: 2,
      weight: 276,
      actived: true
    }
  ]

  index = 2

  buttonText = '摘苹果'

  isPicking = false

  pickApple() {
    if (this.isPicking) return

    this.isPicking = true
    this.buttonText = '...正在采摘'
    setTimeout(() => {
      runInAction(() => {
        // weight 
        const weight = Math.ceil(200 + Math.random() * 99)
        // add apple
        this.index = this.index + 1
        this.apples.push({
          index: this.index,
          weight,
          actived: true
        })
        this.isPicking = false
        this.buttonText = '摘苹果'
      })
    }, 500);
  }

  eatApple(index) {
    this.apples[index].actived = false
  }

  get activedApples() {
    return this.apples.filter(apple => apple.actived === true)
  }

  // 未被吃掉的水果个数
  get notEatenQuantity() {
    return this.apples.filter(apple => apple.actived === true).length
  }

  // 未被吃掉的水果克数
  get notEatenWeight() {
    return this.apples.filter(apple => apple.actived === true).reduce((total, apple) => {
      return total += apple.weight
    }, 0)
  }

  // 被吃掉的水果个数
  get EatenQuantity() {
    return this.apples.filter(apple => apple.actived === false).length
  }

  // 被吃掉的水果克数
  get EatenWeight() {
    return this.apples.filter(apple => apple.actived === false).reduce((total, apple) => {
      return total += apple.weight
    }, 0)
  }
}

const apple = new AppleStore()

export default AppleStore
