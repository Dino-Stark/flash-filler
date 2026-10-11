import { chromium } from 'playwright';

async function main() {
  // 1. 启动 Chromium 浏览器
  // headless: false 表示显示浏览器窗口
  const browser = await chromium.launch({
    headless: false,
  });

  // 2. 创建一个新的浏览器页面（类似新建一个标签页）
  const page = await browser.newPage();

  // 3. 打开百度首页
  await page.goto('https://www.baidu.com');

  // 4. 找到页面上的链接并点击
  // getByRole('link') 表示查找 HTML 中的链接元素
  // name 是链接显示的文字，这里假设链接文字为“新闻”
  await page.getByRole('link', { name: '新闻' }).click();

  // 5. 等待一会儿，让页面有时间完成跳转
  await page.waitForTimeout(2000);

  // 6. 打印当前页面的网址
  console.log('当前页面 URL：', page.url());

  // 7. 关闭浏览器
  await browser.close();
}

// 执行主函数
main();
