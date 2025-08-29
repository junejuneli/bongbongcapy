#!/usr/bin/env node

/**
 * SEO检查和优化脚本 - 敲好运 BongBongCapy
 * 用于验证网站的SEO配置是否正确
 */

const fs = require('fs');
const path = require('path');

class SEOChecker {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.success = [];
  }

  // 检查sitemap.xml
  checkSitemap() {
    const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
    
    if (!fs.existsSync(sitemapPath)) {
      this.errors.push('❌ sitemap.xml 文件不存在');
      return;
    }
    
    const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
    
    // 检查必要的URL
    const requiredUrls = [
      'https://bongbongcapy.com/',
      'https://bongbongcapy.com/download',
      'https://bongbongcapy.com/features',
      'https://bongbongcapy.com/costumes'
    ];
    
    requiredUrls.forEach(url => {
      if (sitemap.includes(url)) {
        this.success.push(`✅ 包含必要URL: ${url}`);
      } else {
        this.warnings.push(`⚠️ 可能缺失URL: ${url}`);
      }
    });
    
    // 检查图片标签
    if (sitemap.includes('image:image')) {
      this.success.push('✅ 包含图片SEO标签');
    } else {
      this.warnings.push('⚠️ 缺少图片SEO标签');
    }
    
    // 检查多语言标签
    if (sitemap.includes('hreflang')) {
      this.success.push('✅ 包含多语言支持');
    } else {
      this.warnings.push('⚠️ 缺少多语言SEO标签');
    }
  }

  // 检查robots.txt
  checkRobots() {
    const robotsPath = path.join(__dirname, 'public', 'robots.txt');
    
    if (!fs.existsSync(robotsPath)) {
      this.errors.push('❌ robots.txt 文件不存在');
      return;
    }
    
    const robots = fs.readFileSync(robotsPath, 'utf-8');
    
    // 检查sitemap引用
    if (robots.includes('Sitemap:')) {
      this.success.push('✅ robots.txt 包含sitemap引用');
    } else {
      this.errors.push('❌ robots.txt 缺少sitemap引用');
    }
    
    // 检查允许抓取
    if (robots.includes('Allow: /')) {
      this.success.push('✅ 允许搜索引擎抓取');
    } else {
      this.warnings.push('⚠️ 可能限制了搜索引擎抓取');
    }
  }

  // 检查HTML meta标签
  checkHTML() {
    const htmlPath = path.join(__dirname, 'index.html');
    
    if (!fs.existsSync(htmlPath)) {
      this.errors.push('❌ index.html 文件不存在');
      return;
    }
    
    const html = fs.readFileSync(htmlPath, 'utf-8');
    
    // 检查基础SEO标签
    const seoTags = [
      { tag: '<title>', name: '标题标签' },
      { tag: 'meta name="description"', name: '描述标签' },
      { tag: 'meta name="keywords"', name: '关键词标签' },
      { tag: 'link rel="canonical"', name: '标准URL标签' },
      { tag: 'meta property="og:', name: 'Open Graph标签' },
      { tag: 'meta name="twitter:', name: 'Twitter标签' },
      { tag: 'application/ld+json', name: '结构化数据' }
    ];
    
    seoTags.forEach(({ tag, name }) => {
      if (html.includes(tag)) {
        this.success.push(`✅ ${name}存在`);
      } else {
        this.errors.push(`❌ ${name}缺失`);
      }
    });
    
    // 检查多语言支持
    if (html.includes('hreflang=')) {
      this.success.push('✅ HTML包含多语言支持');
    } else {
      this.warnings.push('⚠️ HTML缺少多语言SEO标签');
    }
    
    // 检查图片alt标签建议
    const imgCount = (html.match(/<img/g) || []).length;
    const altCount = (html.match(/alt="/g) || []).length;
    
    if (imgCount === 0) {
      this.warnings.push('⚠️ 建议添加更多图片内容');
    } else if (altCount >= imgCount) {
      this.success.push('✅ 图片包含alt属性');
    } else {
      this.warnings.push(`⚠️ ${imgCount - altCount}个图片缺少alt属性`);
    }
  }

  // 生成报告
  generateReport() {
    console.log('\n🔍 BongBongCapy SEO 检查报告');
    console.log('='.repeat(50));
    
    if (this.success.length > 0) {
      console.log('\n📈 成功项目:');
      this.success.forEach(item => console.log(`  ${item}`));
    }
    
    if (this.warnings.length > 0) {
      console.log('\n⚠️ 警告项目:');
      this.warnings.forEach(item => console.log(`  ${item}`));
    }
    
    if (this.errors.length > 0) {
      console.log('\n❌ 错误项目:');
      this.errors.forEach(item => console.log(`  ${item}`));
    }
    
    console.log('\n📊 总体评分:');
    const total = this.success.length + this.warnings.length + this.errors.length;
    const score = Math.round((this.success.length / total) * 100);
    console.log(`  SEO得分: ${score}% (${this.success.length}/${total})`);
    
    if (score >= 90) {
      console.log('  🏆 优秀！SEO配置很完善');
    } else if (score >= 70) {
      console.log('  👍 良好，还有提升空间');
    } else {
      console.log('  🔧 需要改进SEO配置');
    }
    
    console.log('\n💡 SEO优化建议:');
    console.log('  1. 定期更新sitemap.xml中的lastmod时间');
    console.log('  2. 监控Google Search Console的抓取状态');
    console.log('  3. 确保网站加载速度优化');
    console.log('  4. 添加更多高质量的原创内容');
    console.log('  5. 建立高质量的外部链接');
    
    return score >= 80;
  }

  // 运行所有检查
  run() {
    console.log('开始SEO检查...\n');
    
    this.checkSitemap();
    this.checkRobots();
    this.checkHTML();
    
    return this.generateReport();
  }
}

// 运行检查
if (require.main === module) {
  const checker = new SEOChecker();
  const passed = checker.run();
  process.exit(passed ? 0 : 1);
}

module.exports = SEOChecker;