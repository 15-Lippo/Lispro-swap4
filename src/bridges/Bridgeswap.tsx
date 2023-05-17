import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'krusty',
  fromChain: 137,
  fromToken: '0x386C126Edf2013A0f146BDe8dF1b67D93e2ACE90',
   logoURI: 'https://raw.githubusercontent.com/Krustycoin0/swap/main/src/components/navbar/logoURI.jpg',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const WidgetSwap = () => {
  return <LiFiWidget config={widgetConfig} />;
};
