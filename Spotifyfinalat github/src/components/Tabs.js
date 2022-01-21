import React from 'react';
class Tabs extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className = 'tab-pane ';
  
      if (activeTab === label) {
        className += ' tab-pane active';
      }
  
      return (
        <li
          className={className}
          onClick={onClick}
        >
          {label}
        </li>
      );
    }
  }
  
  export default Tabs;