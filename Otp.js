const min = 111111
const max = 999999


const GenerateOTP = () => {
    console.log(Math.floor(Math.random() * max))
    console.log(Math.floor(Math.random() * (max - min) + min))
}

GenerateOTP()