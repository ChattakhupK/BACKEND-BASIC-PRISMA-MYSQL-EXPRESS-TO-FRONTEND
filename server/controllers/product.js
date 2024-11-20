const prisma = require("../prisma/prisma");

exports.create = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    });
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};

exports.list = async (req, res) => {
  try {
    const listProduct = await prisma.product.findMany();
    res.json(listProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};

exports.read = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log(productId);

    const product = await prisma.product.findUnique({
      where: {
        id: Number(productId),
      },
    });

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price } = req.body;
    console.log(productId);

    const updateProduct = await prisma.product.update({
      where: {
        id: Number(productId),
      },
      data: {
        name: name,
        price: price,
      },
    });

    res.json(updateProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log(productId);

    const removeProduct = await prisma.product.delete({
      where: {
        id: Number(productId),
      },
    });

    res.send(removeProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json("server error");
  }
};
