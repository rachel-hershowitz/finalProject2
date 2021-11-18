const User = require('../models/user.model');
const PersonalInformation = require('../models/personalInformation.model');
const { Status } = require('../models/user.model');

const sign = async (req, res) => {
    console.log("***************register****************")
    console.log(req.body)
    let myUser = new User(req.body)
    myUser.isCustomer = true
    myUser.status = Status.a
    console.log(myUser);
    try {
        await myUser.save(myUser);
        console.log("success create new users!!");
        res.status(200).json({ myUser });
    }
    catch (error) {
        console.log("failed create new users!!");
        console.log("error: " + error);
        res.status(500).json({ err: error.message })
    }
}

const getAllCustomer = async (req, res) => {
    debugger
    console.log("********************getAllCustomer**********************");
    try {
        let users = await (await User.find()).filter(x => x.isCustomer)
        if (users == null) {
            res.send("could not have user");
        }
        return res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({ myMessage: error.message })
    }
}

const getById = (req, res) => {
    console.log("#############getById#############");
    User.findById(req.params.usersId)
        .then((users) => {
            res.status(200).json({ users: users })
        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })
}


const checkLogin = async (req, res) => {
    console.log("********************checkLogin**********************");

    User.findOne({ password: req.body.password, userName: req.body.userName })
        .then((user) => {
            if (user != null) {
                console.log(user)
                res.status(200).json(user)
            }
            else {
                console.log("***user not exist***");
                res.status(401).send("user not exist")
            }
        }).
        catch((err) => {
            console.log("***fail***");
            res.status(500).json({ err: err.massage })
        })
}


const deleteCustomer = async (req, res) => {
    console.log("deleteCustomer")
    console.log(req.params.id)
    try {
        await User.findOneAndDelete({ identity: req.params.id })
        res.status(200).json({ "massage": `${req.params.id} is deleted` });
    }
    catch (error) {
        console.log("catch")
        res.status(500).json({ "error message": error.massage });
    }
}


const saveAllDetails = async (req, res) => {

    console.log("***************saveAllDetails***************")
    let myPersonalInformation;
    let c = await User.findOne({ identity: req.params.id })
    console.log({ c: c })
    c.status = Status.b

    try {
        await c.save()
    }
    catch (error) {
        console.log("----NO SUCCESS TO SAVE THE CUSTOMER :( ----")
    }

    let details = await PersonalInformation.findOne({ userId: c._id })

    if (details == null) {
        console.log({ "+++++++++++++++++++++++req.body": req.body })
        console.log("you dont have any details. now we create you!!")
        myPersonalInformation = new PersonalInformation(req.body)
        myPersonalInformation.userId = c._id
        try {
            await myPersonalInformation.save();
            console.log({ myPersonalInformation: myPersonalInformation })
            res.status(200).json({ myPersonalInformation });
        }
        catch (error) {
            console.log("failed saveAllDetails!!");
            console.log("error: " + error);
            res.status(500).json({ err: error.message })
        }
    } else {
        console.log({ "+++++++++++++++++++++++req.body": req.body })
        let details = await PersonalInformation.findOneAndUpdate({ userId: c._id }, req.body)
        c.status = Status.b
        await details.save();
        console.log({ details: details })
        console.log("you have details!!!!!!!!!!!!!!")
    }
}



module.exports = {
    sign,
    getAllCustomer,
    getById,
    checkLogin,
    saveAllDetails,
    deleteCustomer
};


// populate-פותח את האוביקט המסוים
// select-שולף רק את השדות הרצויים מתוך מה ששלף בפופליט
// match-שולף רק את מה ששוה בדיוק למה שכתוב בו

//images ששולף את כל רשימת ה populate שליפת כל המשתמשים עם
// const getAllPopulate = async (req, res) => {
//     console.log("get all users with populate");
//     try {
//         let users = await User.find().populate('images')
//         if (users == null) {
//             res.send("could not have user");
//         }
//         return res.json({ status: 200, users: users })
//     }
//     catch (error) {
//         res.status(500).json({ myMessage: error.message })
//     }
// }

// match,select ע"פ images ששולף את כל רשימת ה populate שליפת כל המשתמשים עם
// const getAllPopulateSelectMatch = async (req, res) => {
//     console.log("get all users with populate and select&&match");
//     try {
//         let users = await User.find().populate({
//             path: 'images',
//             select: { description: 1 },
//             match: { description: "aaaabbbb" }
//         })
//         if (users == null) {
//             res.send("could not have user");
//         }
//         return res.json({ status: 200, users: users })
//     }
//     catch (error) {
//         res.status(500).json({ myMessage: error.message })
//     }
// }

//update
// const updateCustomer = async (req, res) => {
//     console.log("***********updateCustomer*********");
//     let updateCustomer;
//     try {
//         console.log(req.params.userId);
//         updateCustomer=await Customer.findByIdAndUpdate(req.params.userId,req.body)
//         await updateCustomer.save()
//         res.status(200).json({updateCustomer:updateCustomer})
//         user = await Customer.findByIdAndUpdate(req.params.id, req.body)
//         user = await Customer.findOneAndUpdate({"name":req.params.name}, req.body)
//         user= await Customer.update({name:req.params.name}, { $set: { name: req.body.name } });
//         res.send("the user is updated")
//     } catch (err) {
//       res.status(500).json({ err: err.toString() })
//     }
//   }

// //update
// const updateCustomer = async (req, res) => {
//     console.log("update Customer");
//     try {
//         let user = await Customer.findByIdAndUpdate(req.params.userId, req.body)
//         // user = await Customer.findOneAndUpdate({ "name": req.params.name }, req.body)
//         res.status(200).json({ updateCustomer: user, message: "user is update" })
//     } catch (err) {
//         res.status(500).json({ err: err.message })
//     }
// }

// // updateCustomerName
// const updateCustomerName = async (req, res) => {
//     console.log("updateCustomerName")
//     try {
//         let user = await Customer.findById(req.params.userId, req.body)
//         res.status(200).json({ updateCustomer: user, message: "the name of the user is update" })
//     }
//     catch (error) {
//         res.status(500).json({ err: err.message })
//     }
// }

// deleteCustomer


// const saveAllDetails = async (req, res) => {
//     console.log("***************saveAllDetails****************")
//     let myPersonalInformation = new PersonalInformation(req.body)
//     let c = await User.findOne({ identity: req.params.id })
//     myPersonalInformation.userId = c._id
//     try {
//         await myPersonalInformation.save();
//         console.log("success saveAllDetails!!");
//         res.status(200).json({ myPersonalInformation });
//     }
//     catch (error) {
//         console.log("failed saveAllDetails!!");
//         console.log("error: " + error);
//         res.status(500).json({ err: error.message })
//     }
// }