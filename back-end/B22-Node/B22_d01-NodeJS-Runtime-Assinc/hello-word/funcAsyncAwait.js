const firstLineJohanna = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Johanna: Whats up?'), 2000)
  })
}

const fistLineLucia = async () => {
  const something = await firstLineJohanna()
  return something + 'Lucia: Ok, and you?'
}

const SecondLineJohanna = async () => {
  const something = await fistLineLucia()
  return something + "\n Johanna: Lets go out some time?"
}

const SecondLineLucia = async () => {
  const something = await SecondLineJohanna()
  return something + "\n Lucia: Sure!"
}

const ThirdLineLucia = async () => {
  const something = await SecondLineLucia()
  return something + "\n Lucia: ..."
}

const FourthLineLucia = async () => {
  const something = await ThirdLineLucia()
  return something + "\n Lucia: Tmrw nite 20pm?"
}
const ThirdLineJohanna = async () => {
  const something = await FourthLineLucia()
  return something + "\n Johanna: ... \n Sweet! Till There!"
}
ThirdLineJohanna().then(res => {
  console.log(res)
})