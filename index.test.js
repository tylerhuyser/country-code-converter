// const convertCountryName = require('./index')

const {
  convertIOCCountryCode,
  convertFIFACountryCode,
  convertISO3CountryCode,
  convertISO2CountryCode,
  convertCountryName
} = require('./index')


console.log(convertIOCCountryCode('USA'))
console.log(convertFIFACountryCode('USA'))
console.log(convertISO3CountryCode('USA'))
console.log(convertISO2CountryCode('US'))
console.log(convertCountryName('United States'))