// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// TODO: Gather data from dbs and return an object with the info.

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  //TODO: find where the user data is located in central dataBase
  const dataBaseName = await central(id);
  console.log(dataBaseName)
  //Step 2 find the user with thier basicInfo
  const basicInfo = await dbs[dataBaseName](id)
 console.log(basicInfo)
//Step 3 once in dataBase take userInfo
 const personalData = await vault(id);
  console.log(personalData);
//

  

}

getUserData(6)
