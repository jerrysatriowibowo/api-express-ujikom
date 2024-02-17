const db = require("../database/models");
const User = db.User;
const bcrypt = require("bcryptjs");

exports.create = (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        role: req.body.role ? req.body.role : false,
    };

    User.create(user).then((data) => {
        res.json({
            message: "Berhasil tambah user!",
            data: data,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Gagal menambah user!",
            data: null,
        });
    });
};

exports.findAll = (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    }).then((users) => {
        res.json({
            message: "Berhasil menampilkan user!",
            data: users,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Gagal menampilkan user!.",
            data: null,
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password);
    }

    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role ? req.body.role : false,
    };

    User.update(userData, {
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Berhasil update user!",
                data: userData,
            });
        } else {
            res.json({
                message: `Tidak dapat update user id=${id}`,
                data: userData,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Gagal update user!",
            data: null,
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Berhasil hapus user!",
                data: req.body,
            });
        } else {
            res.json({
                message: `Tidak dapat hapus user id=${id}`,
                data: req.body,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Gagal hapus user!",
            data: null,
        });
    });
};

exports.findOne = (req, res) => {
    User.findByPk(req.params.id, {
        attributes: { exclude: ['password'] }
    }).then((user) => {
        if (user) {
            res.json({
                message: "Berhasil menemukan user!",
                data: user,
            });
        } else {
            res.status(404).json({
                message: "User tidak ditemukan.",
                data: null,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Gagal menampilkan user!",
            data: null,
        });
    });
};
