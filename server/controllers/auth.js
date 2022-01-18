import User from '../modules/user';

export const register = async (req, res) => {
    console.log(req);
    //haa  '
    const {name, email, password} = req.body;
    if(!name) return res.status(400).send("Name is required");
    if(!password || password.length < 6)
        return res
        .status(400)
        .send("Password is required and should be min 6 characters long"); 
    let userExist = await User.findOne({email}).exec();
    if(userExist) return res.status(400).send('Email is taken')

    const user = new User(req.body)
    try {
        await user.save();
        console.log("USER CREAT)ED", user);
        return res.json({ ok: true});
    } catch (err) {
        console.log('CREATE USER FAILED', err)
        return res.status(400).send("Error. Try again. ")
    }

};

export const login = async (req, res) => {
    console.log("request : ", req.body);
    console.log("result : ", res);
};
