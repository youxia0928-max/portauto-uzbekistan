import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // 获取用户IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwardedFor?.split(',')[0] || realIp || 'unknown';
    
    // 简单的IP范围判断（用于演示）
    // 乌兹别克斯坦IP段通常以 91.x.x.x, 213.x.x.x, 178.x.x.x, 188.x.x.x 等开头
    // 这里我们可以根据 Accept-Language 头来推断用户语言
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // 判断语言
    let language = 'en'; // 默认英语
    if (acceptLanguage.includes('ru') || acceptLanguage.includes('uz')) {
      language = 'ru'; // 俄语或乌兹别克语优先
    }
    
    // 尝试通过IP地址判断地区（这里简化处理，实际需要IP库）
    // 如果IP是已知的乌兹别克斯坦IP段，设置俄语
    const uzbekistanPrefixes = ['91.', '213.', '178.', '188.', '84.', '62.', '5.'];
    const isUzbekistan = uzbekistanPrefixes.some(prefix => ip.startsWith(prefix));
    
    if (isUzbekistan) {
      language = 'ru';
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
