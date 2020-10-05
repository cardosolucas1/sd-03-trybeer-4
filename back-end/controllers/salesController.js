const { getAllSales, getSaleInfo, finishSale } = require('../services/saleService');

const listSales = async (_req, res) => {
  const sales = await getAllSales();
  return res.status(200).json(sales);
};

const saleDetails = async (req, res) => {
  const sales = await getSaleInfo(req.params.id);
  const { code } = sales;
  return res.status(code).json(sales);
};

const setAsDelivered = async (req, res) => {
  const { id } = req.params;
  const { saleInfo } = await getSaleInfo(id) || [];

  switch (true) {
    case !saleInfo:
      return res.status(404).json({ message: 'Order not found' });
    case saleInfo.status === 'Entregue':
      return res.status(304).json({ message: 'Order was already delivered' });
    case saleInfo.status === 'Pendente':
      return finishSale(id).then(() => res.status(200));
    default:
      return res.status(400).json({ message: 'Sorry. Try again!' });
  }
};

module.exports = {
  listSales,
  saleDetails,
  setAsDelivered,
};
