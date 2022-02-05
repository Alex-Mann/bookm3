import Moralis from 'moralis/node.js'
import dayjs from 'dayjs'
import { config as dotenv_config } from 'dotenv'

dotenv_config()

const serverUrl = process.env.MORALIS_SERVER_URL
const appId = process.env.MORALIS_APP_ID
Moralis.start({ serverUrl, appId })

await main()

async function main() {
  await testSignUp()
  await testLogin()
  await testSetAvailability()
  await testGetAvailability()
}

async function testSignUp() {
  await signUp('vinous.easy_05@icloud.com', '123456')
}
// sign up a user
async function signUp(email, pass) {
  const user = new Moralis.User()
  user.set('username', email)
  user.set('password', pass)
  user.set('email', email)

  try {
    await user.signUp()
    // Hooray! Let them use the app now.
  } catch (error) {
    // Show the error message somewhere and let the user try again.
    console.log('Error: ' + error.code + ' ' + error.message)
  }
}

async function testLogin() {
  const user = await login('vinous.easy_05@icloud.com', '123456')
}
async function login(email, pass) {
  const user = await Moralis.User.logIn(email, pass)
  return user
}

async function logOut() {
  await Moralis.User.logOut()
  console.log('logged out')
}

async function testSetAvailability() {
  const user = await login('vinous.easy_05@icloud.com', '123456')
  await setAvailability(user, 1, 5, 9, 17, 0, 0)
}
async function setAvailability(user, startDay, endDay, startHour, endHour, startMin, endMin) {
  /*
  * All times are in dayjs format, ex:
  * day = 1 is monday, day = 2 is tuesday, etc.
  * hour = 0 is midnight, hour = 12 is noon, etc.
  *
  * DayJS serves as the input to the model
  */

  // TODO: check if availabilty is already set

  // sets the availablity of the current user in the current app
  const UserAvailability = Moralis.Object.extend('UserAvailability')
  const userAvailability = new UserAvailability()

  // userAvailability.set('userId', userId)
  userAvailability.set('startDay', startDay)
  userAvailability.set('endDay', endDay)
  userAvailability.set('startHour', startHour)
  userAvailability.set('endHour', endHour)
  userAvailability.set('startMin', startMin)
  userAvailability.set('endMin', endMin)
  userAvailability.set('user', user) // setting the user object will create a pointer in the db

  await userAvailability.save()

}
async function testGetAvailability() {
  const user = await login('vinous.easy_05@icloud.com', '123456')
  await getAvailability(user)
}
async function getAvailability(user){
  const UserAvailability = Moralis.Object.extend("UserAvailability");
  const query = new Moralis.Query(UserAvailability);
  query.equalTo('user', user);

  //get monster with id xWMyZ4YEGZ
  let avail
  try {
    avail = await query.find()
  } catch (error) {
    console.log(error)
  }

  if (avail.length == 0){
    console.log('Unable to find availability')
    return
  }
  // always take element 0
  const startDay = avail[0].get('startDay')
  const endDay = avail[0].get('endDay')
  const startHour = avail[0].get('startHour')
  const endHour = avail[0].get('endHour')
  const startMin = avail[0].get('startMin')
  const endMin = avail[0].get('endMin')


  printAvailabiliy(startDay, endDay, startHour, endHour, startMin, endMin)

}

function printAvailabiliy(startDay, endDay, startHour, endHour, startMin, endMin){

  const sd = dayjs(startDay).format('ddd')
  const ed = dayjs(endDay).format('ddd')
  const st = dayjs().hour(startHour).minute(startMin).format('h:mma')
  const et = dayjs().hour(endHour).minute(endMin).format('h:mma')

  console.log(`Availability is set to: ${sd} ${st} - ${ed} ${et}`)
}
