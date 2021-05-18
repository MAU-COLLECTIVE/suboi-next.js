import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';

function Items({ data }) {
  return <div>
    { data && data.map((item) => <Item
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
      />)}
  </div>;
}

Items.propTypes = {
  data: PropTypes.array,
};

export default Items;
