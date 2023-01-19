const mongoose = require('mongoose');
const multer = require("multer");
const path = require("path");

const deedSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  podcast: {
    type: String,
    required: true
  },
  whatsHappening: {
    type: String,
    required: true
  },
  hashTags: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});

const Deed = module.exports = mongoose.model('Deed', deedSchema);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

let upload = multer({
  storage: storage
}).single('image');


module.exports.createDeed = (req , res) => {
  upload(req, res, error => {
    if (error) {
      console.log(error);
      res.status(500).json({status: 'Error', message: 'Error occurred while creating contract.'});
      return;
    }

    const deed = new Deed({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      cardNumber: req.body.cardNumber,
      location: req.body.location,
      image: req.file,
      title: req.body.title,
      podcast: req.body.podcast,
      whatsHappening: req.body.whatsHappening,
      hashTags: req.body.hashTags,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    deed.save((error, response)=> {
      if(error) {
        console.log (error)
        res.status(500).json({success: false, message: 'Error occurred while creating deed.'});
        return;
      }

      if(!error) {
        res.status(200).json({success: true, message: 'Deed created successfully.', deed: response});
      }
    });
  });
}

module.exports.updateDeed = (req , res) => {
  Deed.findOneAndUpdate({_id: req.params.id}, req.body,{}, error => {
    if (error) {
      res.status(500).json({success: false, message: 'Error occurred while updating details of deed.'});
      return;
    }

    if (!error) {
      res.status(200).json({success: true, message: 'Deed details updated successfully.'});
    }
  });
}

module.exports.getDeedByID = (req , res) => {
  Deed.findById(req.params.id, req.body,{}, (error, response) => {
    if (error) {
      res.status(500).json({success: false, message: 'Error occurred while getting details of deed.'});
      return;
    }

    res.status(200).json({success: true, deed: response});
  });
}

module.exports.getDeeds = async (req, res) => {
  const deeds = await Deed.find({}).catch(() => {
    return res.status(500).json({status: 'Error', message: 'Error occurred while getting deeds.'});
  });

  res.status(200).json({status: 'Success', deeds: deeds});
}

/*module.exports.getContractsByUserId = (req, res) => {
  Contract.find({userId: req.params.userId}, ((error, response) => {
    if (error) {
      res.status(500).json({success: false, message: 'Error occurred while getting contracts.'});
      return;
    }

    if (response && response.length > 0) {
      const contracts = [];

      if (response && response.length > 0) {
        for (const contract of response) {
          const data = {
            _id: contract._id,
            type: contract.type,
            userId: contract.userId,
            status: contract.status,
            documentName: contract.file.originalname
          };

          contracts.push(data);
        }
      }

      res.status(200).json({status: 'Success', contracts: contracts});
      return;
    }

    res.status(200).json({status: 'Success', contracts: []});
  }));
}*/

/*module.exports.updateContractStatus = (req, res) => {
  Contract.findOneAndUpdate({_id: req.params.id}, {status: req.body.status},{}, (error) => {
    if (error) {
      res.status(500).json({success: false, message: 'Error occurred while updating status of contract.'});
      return;
    }

    if (!error) {
      res.status(200).json({success: true, message: 'Contract status updated successfully.'});
    }
  });
}*/
