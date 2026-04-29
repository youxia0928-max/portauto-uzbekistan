import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // 获取用户IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwardedFor?.split(',')[0] || realIp || 'unknown';
    
    // 获取 Accept-Language 头
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // 优先判断语言
    let language = 'en'; // 默认英语
    
    // 中文优先判断
    if (acceptLanguage.includes('zh')) {
      language = 'zh';
    }
    // 俄语或乌兹别克语
    else if (acceptLanguage.includes('ru') || acceptLanguage.includes('uz')) {
      language = 'ru';
    }
    
    // 尝试通过IP地址判断地区
    // 乌兹别克斯坦IP段
    const uzbekistanPrefixes = ['91.', '213.', '178.', '188.', '84.', '62.', '5.', '109.', '195.'];
    const isUzbekistan = uzbekistanPrefixes.some(prefix => ip.startsWith(prefix));
    
    // 中国IP段（简化判断）
    const chinaPrefixes = ['1.', '14.', '36.', '39.', '42.', '43.', '49.', '58.', '59.', '60.', '61.', '101.', '103.', '106.', '110.', '111.', '112.', '113.', '114.', '115.', '116.', '117.', '118.', '119.', '120.', '121.', '122.', '123.', '124.', '125.', '140.', '144.', '150.', '153.', '157.', '171.', '175.', '180.', '182.', '183.', '202.', '203.', '210.', '211.', '218.', '220.', '221.', '222.'];
    const isChina = chinaPrefixes.some(prefix => ip.startsWith(prefix));
    
    // IP判断权重低于浏览器语言判断
    if (isUzbekistan && language === 'en') {
      language = 'ru';
    }
    if (isChina && language === 'en') {
      language = 'zh';
    }
    
    return NextResponse.json({
      ip,
      language,
      acceptLanguage,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      language: 'ru', // 出错时默认俄语
      error: 'Language detection failed',
    });
  }
}
