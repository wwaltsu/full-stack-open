
interface Bmi   {
    height: number
    weight: number
}

const parseArguments = (args: Array<string>): Bmi => {
    if (args.length < 4) throw new Error('Liikaa argumentteja')
    if(args.length > 4) throw new Error('Ei tarpeeksi argumentteja')

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            weight: Number(args[2]),
            height: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers')
    }
}

    const BMIcalculator = (weight: number, height: number, printText: string) => {
        console.log(printText, (weight/Math.pow(height/100,2)).toFixed(1))
    }

    try {
        const {weight, height} = parseArguments(process.argv)
        BMIcalculator(weight, height, 'tulos on:')
    } catch (e) {
        console.log('Virhe, jotain meni pieleen ', e.message)
    }
    