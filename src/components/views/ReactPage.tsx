import {
  Box,
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabProps,
} from '@chakra-ui/react'
import { MyButtons } from '../ui/chakra/MyButtons'
import { MySpinners } from '../ui/chakra/MySpinners'
import { MyModal } from '../ui/chakra/MyModal'

const tabStyle: TabProps = {
  fontWeight: 'bold',
  fontSize: 'xl',
}

export const ReactPage = () => {
  return (
    <ChakraProvider>
      <Box bgColor={'#fff'} p={8}>
        <Tabs variant='enclosed' colorScheme={'teal'}>
          <TabList justifyContent={'center'} mb={4}>
            <Tab {...tabStyle}>Buttons</Tab>
            <Tab {...tabStyle}>Spinners</Tab>
            <Tab {...tabStyle}>Modal</Tab>
          </TabList>

          <Box textAlign={'center'}>
            Bootstrap + jQueryな環境の中で
            <br />
            chakra-ui/reactを利用可能にしています
          </Box>

          <TabPanels>
            <TabPanel>
              <MyButtons />
            </TabPanel>
            <TabPanel>
              <MySpinners />
            </TabPanel>
            <TabPanel>
              <MyModal />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ChakraProvider>
  )
}
