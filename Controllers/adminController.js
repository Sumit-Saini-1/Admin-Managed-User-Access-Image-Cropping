function serverAdminLogin(req,res){
    res.sendFile("D:/SHAREit/Atarashiorg/Admin-Managed-User-Access-Image-Cropping/views/adminLogin.html");
}

function adminLogin(req,res){
    const userId=req.body.userId;
    const password=req.body.password;
    if(userId=="userId"&&password=="userId"){
        res.status(200).send("success");
    }
    else{
        res.status(401).send("invalid credential");
    }
}

module.exports={
    serverAdminLogin,
    adminLogin
}