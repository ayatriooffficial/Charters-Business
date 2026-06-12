import cron from 'node-cron';
import { generateNextBlog } from '../services/blogGenerator.service.js';

let cronJob = null;

/**
 * Initializes the cron scheduler for Monday, Wednesday, and Friday at midnight.
 */
export const startBlogScheduler = () => {
  console.log('🕐 Blog Scheduler: Initializing scheduler (Mon, Wed, Fri at 00:00 IST)...');

  // Cron Expression: "0 0 * * 1,3,5" -> At 00:00 (midnight) on Monday, Wednesday, and Friday
  cronJob = cron.schedule(
    '0 0 * * 1,3,5',
    async () => {
      console.log('⏰ Blog Scheduler: Running scheduled AI blog generation job...');
      try {
        await generateNextBlog();
        console.log('⏰ Blog Scheduler: Scheduled generation finished successfully.');
      } catch (err) {
        console.error('❌ Blog Scheduler: Error during scheduled generation:', err.message);
      }
    },
    {
      timezone: 'Asia/Kolkata',
    }
  );

  console.log('✅ Blog Scheduler: Cron job registered and active.');
};

/**
 * Stops the active scheduler job.
 */
export const stopBlogScheduler = () => {
  if (cronJob) {
    cronJob.stop();
    console.log('🛑 Blog Scheduler: Cron job stopped.');
  }
};

export default {
  startBlogScheduler,
  stopBlogScheduler,
};
