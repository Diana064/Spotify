import React, {useState} from "react";


const SidebarNav = (props) => {
  const { items } = props;
    const [activeItem, setActiveItem] = useState(0);
  
    return (
      <div className="sidebar-nav">
        <div className="sidebar-nav-menu">
          {items.map(({ title }, key) => {

            return (
              <SidebarItem
                title={title}
                setActiveItem={setActiveItem}
                isActive={key === activeItem}
              >
                {title}
              </SidebarItem>
            );
          })}
        </div>
      </div>
    );
  }
  
  const SidebarItem = ({ title, isActive, children, setActiveItem, activeItem, index }) => {

  //sconst icon = isActive ? <Icon1> : <Icon2>
    const cls = "sidebar-nav-menu-item " + (isActive ? "item-active" : "");
    return (
      <div className={cls}>
        <div className="sidebar-nav-menu-item-head">
          <div className="sidebar-nav-menu-item-head-title">{title}</div>
          <div className="sidebar-nav-menu-item-head-help">
            <button
              type="button"
              className="btn-help"
              onClick={() => setActiveItem(index)}
            >
              Some Icon
            </button>
          </div>
          <div className="sidebar-nav-menu-item-head-icon">
            <i className="fa fa-caret-down" aria-hidden="true" />
          </div>
        </div>
        <div className="sidebar-nav-menu-item-body">{children}</div>
      </div>
    );
  }

  export default SidebarNav;
