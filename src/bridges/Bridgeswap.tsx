import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'LSP20',
  fromChain: 56,
  fromToken: '0xe62a9bc6ede534e18dd2793dcaf5a2b6df112180',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const WidgetSwap = () => {
  return <LiFiWidget config={widgetConfig} />;
};
