import React from 'react';
import PropTypes from 'prop-types';
import { urlFor } from 'utils/sanity';
import Item from './Item/Item';
import styles from './Items.module.scss';

function Items({ data }) {
  return <div className={styles.items}>
    { data && data.map((item) => <Item
        key={item.slug.current}
        id={item.slug.current}
        image={urlFor(data[0]?.productImage[0]).url()}
        name={item.name}
        price={item.price}
      />)}
  </div>;
}

Items.propTypes = {
  data: PropTypes.array,
};

export default Items;
