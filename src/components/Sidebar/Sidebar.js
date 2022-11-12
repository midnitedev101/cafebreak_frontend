// New components must be declared in components/index.js
// import React from 'react';

import styles from './Sidebar.module.scss';

// /**
//  * Sidebar allows components to pass a Sidebar level via props.
//  * @param {Props} props The props object.
//  * @param {h1|h2|h3|h4|h5|h6} props.level An Sidebar level type to render.
//  * @param {string} props.className An optional className to be added to the component.
//  * @param {React.ReactElement} props.children The children to be rendered.
//  * @return {React.ReactElement} The Sidebar component.
//  */
// function Sidebar({ level = 'h1', children, className }) {
//   const Tag = ({ ...props }) => React.createElement(level, props, children);

//   return <Tag className={className}>{children}</Tag>;
// }

// export default Sidebar;

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      
    </div>
  );
}

