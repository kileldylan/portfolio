const { injectSpeedInsights } = require('@vercel/speed-insights');

const analyzePerformance = async () => {
  try {
    // Inject the performance insights for your website URL
    const result = await injectSpeedInsights({
      url: 'https://deelankilel.vercel.app',
    });
    console.log('Performance Insights:', result);
  } catch (error) {
    console.error('Error analyzing performance:', error);
  }
};

analyzePerformance();
