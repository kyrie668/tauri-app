import React from 'react';
import { Users, Target, Globe, Code, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { withAuthGuard } from '@/components/with-auth-guard';

const About = withAuthGuard(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              关于我们
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              我们是一支充满激情的团队，致力于通过创新技术为用户创造价值，
              让科技更好地服务于生活。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">我们的使命</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                通过先进的技术解决方案，帮助企业和个人提升效率，实现数字化转型。
                我们相信技术应该简单易用，为每个人带来便利。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Target className="h-5 w-5" />
                  <span className="font-medium">专注创新</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <Heart className="h-5 w-5" />
                  <span className="font-medium">用户至上</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-600">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">全球视野</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <Code className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              这些价值观指导着我们的每一个决策和行动
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">团队协作</h3>
                <p className="text-gray-600">
                  我们相信团队的力量，通过协作创造出更大的价值
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">追求卓越</h3>
                <p className="text-gray-600">
                  不断追求技术和服务的卓越，永远保持学习的心态
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">诚信负责</h3>
                <p className="text-gray-600">
                  以诚信为本，对客户和社会承担应有的责任
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">我们的成就</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              数字背后是我们不懈努力的见证
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">满意客户</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">成功项目</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-gray-300">服务年限</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">技术支持</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            准备好开始合作了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            让我们一起创造更美好的数字未来
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-50"
            >
              联系我们
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-primary hover:bg-white hover:text-blue-600"
            >
              了解更多
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
});

export default About;
