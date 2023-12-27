const required = (value: string) => (value !== undefined && value !== null && value !== '') || 'This field is required'
const maxLength = (value: string, maxLength: number) => (value !== undefined && value !== null && value !== '') ? (value && value.length <= maxLength) || `Must be less than ${maxLength} characters` : true
const minLength = (value: string, minLength: number) => (value !== undefined && value !== null && value !== '') ? (value && value.length >= minLength) || `Must not be less than ${minLength} characters` : true
const email = (value: string) => (value !== undefined && value !== null && value !== '') ? /.+@.+\..+/.test(value) || 'Must be a valid email address' : true
const noConsecutiveSpaces = (value: string) => (value !== undefined && value !== null && value !== '') ? !/ {2}/gmi.test(value) || 'No consecutive spaces' : true
const numbersOnly = (value: string) => (value !== undefined && value !== null && value !== '') ? /^[0-9]*$/.test(value) || 'Must be numbers only' : true
const uppercaseLettersOnly = (value: string) => (value !== undefined && value !== null && value !== '') ? /^[A-Z ]+$/.test(value) || 'Must be uppercase letters only' : true
const date = (value: string) => (value !== undefined && value !== null && value !== '') ? /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(value) || 'Must be a valid date format (dd-mm-yyyy)' : true
const greaterEqual = (value: string, min: number) => (value !== undefined && value !== null && value !== '') ? (parseInt(value) >= min) || `Must be greater than ${min}` : true
const lesserEqual = (value: string, max: number) => (value !== undefined && value !== null && value !== '') ? (parseInt(value) <= max) || `Must be lesser than ${max}` : true
const nomorPolisi = (value: string) => (value !== undefined && value !== null && value !== '') ? /^[a-z]+-\d+-[a-z]+$/i.test(value) || 'Format Nomor Polisi Tidak Sesuai' : true
const alphaNumericOnly = (value: string) => (value !== undefined && value !== null && value !== '') ? /^[a-zA-Z0-9]*$/.test(value) || 'Must be alphanumeric characters only' : true
const password = (value: string) => (value !== undefined && value !== null && value !== '') ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) || 'Must contain at least one uppercase letter, one lowercase letter, one number and one special character' : true
const passwordNew = (value: string) => (value !== undefined && value !== null && value !== '') ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(value) || 'Must contain at least one uppercase letter, one lowercase letter and one number' : true
const decimalInput = (value: string) => (value !== undefined && value !== null && value !== '') ? /^[0-9]*\.?[0-9]*$/.test(value) || 'Invalid number format' : true
const maxValue = (value: number, maxLength: number) => (value !== undefined && value !== null && value !== 0) ? (value && value <= maxLength) || `Must be less than ${maxLength}` : true
const greaterDateValue = (value: Date, minDate: Date, valuDate: string) => (value !== undefined && value !== null) ? (value && value >= minDate) || `Must be greater than ${valuDate}` : true
const retypePassword = (value: string, valueMatch: string) => (value === valueMatch) || 'Must be match new password'
export default {
  required,
  maxLength,
  minLength,
  email,
  noConsecutiveSpaces,
  numbersOnly,
  uppercaseLettersOnly,
  date,
  greaterEqual,
  lesserEqual,
  nomorPolisi,
  alphaNumericOnly,
  password,
  decimalInput,
  maxValue,
  passwordNew,
  greaterDateValue,
  retypePassword
}
