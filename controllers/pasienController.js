const db = require("../database/models");
const Pasien = db.Pasien;

exports.create = (req, res) => {
    const pasien = {
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat: req.body.alamat,
        tgl_lahir: req.body.tgl_lahir,
        no_telp: req.body.no_telp,
    };

    Pasien.create(pasien).then((data) => {
        res.json({
            message: "Berhasil tambah pasien!",
            data: data,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Gagal menambah pasien!",
            data: null,
        });
    });
};

exports.findAll = (req, res) => {
    Pasien.findAll({
        attributes: { exclude: ['password'] }
    }).then((pasiens) => {
        res.json({
            message: "Berhasil menampilkan pasien!",
            data: pasiens,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Gagal menampilkan pasien!.",
            data: null,
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    const pasienData = {
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat: req.body.alamat,
        tgl_lahir: req.body.tgl_lahir,
        no_telp: req.body.no_telp,
    };

    Pasien.update(pasienData, {
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Berhasil update pasien!",
                data: pasienData,
            });
        } else {
            res.json({
                message: `Tidak dapat update pasien id=${id}`,
                data: pasienData,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Gagal update pasien!",
            data: null,
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Pasien.destroy({
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Berhasil hapus pasien!",
                data: req.body,
            });
        } else {
            res.json({
                message: `Tidak dapat hapus pasien id=${id}`,
                data: req.body,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Gagal hapus pasien!",
            data: null,
        });
    });
};

exports.findOne = (req, res) => {
    Pasien.findByPk(req.params.id).then((pasien) => {
        res.json({
            message: "Berhasil menemukan pasien!",
            data: pasien,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Berhasil menampilkan pasien!",
            data: null,
        });
    });
};