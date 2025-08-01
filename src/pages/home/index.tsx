import React from 'react';
import { ArrowRight, Star, Shield, Zap, Users, Smartphone, Globe, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                创新科技
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  改变世界
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                我们为企业和个人提供前沿的技术解决方案，让数字化转型变得简单高效
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4"
                >
                  开始体验
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-primary hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                >
                  了解更多
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>5.0 用户评分</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>10000+ 活跃用户</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>企业级安全</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              为什么选择我们？
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              我们的产品和服务具有以下独特优势
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-blue-50">
              <CardContent className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">极速性能</h3>
                <p className="text-gray-600 leading-relaxed">
                  采用最新技术架构，响应速度提升10倍，让您的工作效率大幅提升
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-green-50">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">安全可靠</h3>
                <p className="text-gray-600 leading-relaxed">
                  银行级安全加密，多重防护机制，确保您的数据安全无忧
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-purple-50">
              <CardContent className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">移动优先</h3>
                <p className="text-gray-600 leading-relaxed">
                  完美适配各种设备，随时随地访问，移动办公从未如此简单
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-orange-50">
              <CardContent className="p-8">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">全球服务</h3>
                <p className="text-gray-600 leading-relaxed">
                  覆盖全球的服务网络，24/7技术支持，让您无后顾之忧
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-red-50">
              <CardContent className="p-8">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <Code2 className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">开发友好</h3>
                <p className="text-gray-600 leading-relaxed">
                  丰富的API接口，完善的开发文档，助力开发者快速集成
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-teal-50">
              <CardContent className="p-8">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">团队协作</h3>
                <p className="text-gray-600 leading-relaxed">
                  强大的团队协作功能，实时同步，让团队工作更加高效
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              数据说话
            </h2>
            <p className="text-lg text-gray-600">
              这些数字展现了我们的实力和用户的信任
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl sm:text-6xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                1M+
              </div>
              <div className="text-gray-600 text-lg">注册用户</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl sm:text-6xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                99.9%
              </div>
              <div className="text-gray-600 text-lg">服务可用性</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl sm:text-6xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-600 text-lg">国家地区</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl sm:text-6xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-600 text-lg">技术支持</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            准备开始了吗？
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            立即体验我们的产品，开启您的数字化转型之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
            >
              免费试用
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-400 text-black hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
            >
              预约演示
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-70">
            无需信用卡 • 30天免费试用 • 随时取消
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
