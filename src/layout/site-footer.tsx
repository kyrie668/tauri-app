import React from 'react'
import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function SiteFooter() {
    const currentYear = new Date().getFullYear()
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubscribe = async () => {
        
    }

    return (
        <footer className="bg-gray-50 border-t">
            <div className="container py-12">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="输入您的邮箱获取最新资讯 *"
                            className="max-w-md"
                            disabled={isLoading}
                        />
                        <Button onClick={handleSubscribe} disabled={isLoading} className="bg-red-500 hover:bg-red-600 text-white">
                            {isLoading ? '提交中...' : '订阅'}
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                        提交此表单即表示您同意我们使用您的个人信息来接收有关我们即将推出的服务和促销活动的相关邮件。
                    </p>
                </div>

             
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                  
                </div>

                <div className="border-t pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-4">
                            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                                隐私政策
                            </Link>
                            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                                服务条款
                            </Link>
                            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                                Cookie政策
                            </Link>
                            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                                安全中心
                            </Link>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            <span>xxxxx | xxxx | xxxx</span>
                        </div>
                    </div>
                    <div className="text-sm text-muted-foreground text-center md:text-left mt-4">
                        © {currentYear} Kyrie. 版权所有.
                    </div>
                </div>
            </div>
        </footer>
    )
}
