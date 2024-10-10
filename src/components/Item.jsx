import PropTypes from 'prop-types';

const Item = ({ marca, ano_lancamento }) => {
  return (
    <li>
      {marca} - {ano_lancamento}
    </li>
  );
};

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number.isRequired,
};

/* O suporte para defaultProps será removido dos componentes de função em uma versão principal futura. Use parâmetros padrão do JavaScript em vez disso.

 Item.defaultProps = {
   marca: 'faltou Marca',
   ano_lancamento: '0000',
 };*/

export default Item;
