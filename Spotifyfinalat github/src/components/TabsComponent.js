import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabsComponent = ({ role, classes, id, allTitleClass, titleClass }) => {

  return (
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <TabList>
        <Tab role={role} class={classes} id={id}></Tab>
      </TabList>

      <TabPanel>
        <div class={allTitleClass}>
          <div class={titleClass}>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );



};
export default TabsComponent;