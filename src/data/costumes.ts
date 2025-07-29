export interface Costume {
  id: string
  name: {
    zh: string
    en: string
    ja: string
  }
  category: 'headwear' | 'clothing' | 'handheld' | 'woodblock' | 'text' | 'lotus'
  rarity: 'legendary' | 'epic' | 'rare' | 'common'
  image: string
  description: {
    zh: string
    en: string
    ja: string
  }
}

export const costumes: Costume[] = [
  // 头饰类 (Head = 1) - 6个高品质装扮
  {
    id: '1-8',
    name: {
      zh: '天使',
      en: 'Angel',
      ja: '天使'
    },
    category: 'headwear',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz1/qf_hz1_8_tianshi.png',
    description: {
      zh: '圣洁天使光环，神圣不可侵犯',
      en: 'Holy angel halo, sacred and inviolable',
      ja: '聖なる天使の光輪、神聖不可侵'
    }
  },
  {
    id: '1-19',
    name: {
      zh: '财神',
      en: 'Richgod',
      ja: '財神'
    },
    category: 'headwear',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz1/qf_hz1_12_caishenmao.png',
    description: {
      zh: '财神降临，招财进宝',
      en: 'God of wealth descends, bringing fortune',
      ja: '財神降臨、招財進寶'
    }
  },
  {
    id: '1-4',
    name: {
      zh: '王冠',
      en: 'Crown',
      ja: '王冠'
    },
    category: 'headwear',
    rarity: 'epic',
    image: '/capy_skins/qf_hz1/qf_hz1_6_wangguan.png',
    description: {
      zh: '王者风范，至高荣誉',
      en: 'Royal majesty, supreme honor',
      ja: '王者の風格、至高の栄誉'
    }
  },
  {
    id: '1-14',
    name: {
      zh: '垃圾盖',
      en: 'Tub Lid',
      ja: 'ゴミ蓋'
    },
    category: 'headwear',
    rarity: 'epic',
    image: '/capy_skins/qf_hz1/qf_hz1_9_lajigai.png',
    description: {
      zh: '环保主题，创意十足',
      en: 'Environmental theme, creative',
      ja: '環境テーマ、創造的'
    }
  },
  {
    id: '1-15',
    name: {
      zh: '便便',
      en: 'Poop',
      ja: 'うんち'
    },
    category: 'headwear',
    rarity: 'epic',
    image: '/capy_skins/qf_hz1/qf_hz1_14_baba.png',
    description: {
      zh: '搞怪造型，幽默风趣',
      en: 'Funny shape, humorous',
      ja: 'おかしな形、ユーモラス'
    }
  },
  {
    id: '1-16',
    name: {
      zh: '墨镜',
      en: 'Shades',
      ja: 'サングラス'
    },
    category: 'headwear',
    rarity: 'epic',
    image: '/capy_skins/qf_hz1/qf_hz1_13_mojing.png',
    description: {
      zh: '酷炫墨镜，时尚潮流',
      en: 'Cool sunglasses, fashionable',
      ja: 'クールなサングラス、ファッショナブル'
    }
  },

  // 身体类 (Body = 2) - 6个高品质装扮 - 使用预览图
  {
    id: '2-7',
    name: {
      zh: '花棉袄',
      en: 'Thermal',
      ja: '花綿襖'
    },
    category: 'clothing',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz2/preview/icon_hz2_7.png',
    description: {
      zh: '传统花棉袄，温暖如春',
      en: 'Traditional thermal coat, warm as spring',
      ja: '伝統的な花綿襖、春のように暖かい'
    }
  },
  {
    id: '2-16',
    name: {
      zh: '财神服',
      en: 'Rich God',
      ja: '財神服'
    },
    category: 'clothing',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz2/preview/icon_hz2_9.png',
    description: {
      zh: '财神专属服装，金光闪闪',
      en: 'Exclusive god of wealth outfit, golden',
      ja: '財神専用服、金色に輝く'
    }
  },
  {
    id: '2-6',
    name: {
      zh: '木乃伊',
      en: 'Mummy',
      ja: 'ミイラ'
    },
    category: 'clothing',
    rarity: 'epic',
    image: '/capy_skins/qf_hz2/preview/icon_hz2_6.png',
    description: {
      zh: '神秘木乃伊，古埃及风情',
      en: 'Mysterious mummy, ancient Egyptian style',
      ja: '神秘的なミイラ、古代エジプト風'
    }
  },
  {
    id: '2-15',
    name: {
      zh: '垃圾桶',
      en: 'Bin',
      ja: 'ゴミ箱'
    },
    category: 'clothing',
    rarity: 'epic',
    image: '/capy_skins/qf_hz2/preview/icon_hz2_8.png',
    description: {
      zh: '环保垃圾桶，绿色生活',
      en: 'Eco-friendly bin, green living',
      ja: 'エコなゴミ箱、グリーンライフ'
    }
  },
  {
    id: '2-1',
    name: {
      zh: '短袖',
      en: 'T-shirt',
      ja: 'Tシャツ'
    },
    category: 'clothing',
    rarity: 'rare',
    image: '/capy_skins/qf_hz2/preview/icon_hz2_1.png',
    description: {
      zh: '简约短袖，清爽舒适',
      en: 'Simple T-shirt, fresh and comfortable',
      ja: 'シンプルなTシャツ、爽やかで快適'
    }
  },
  {
    id: '2-2',
    name: {
      zh: '草裙',
      en: 'Hula Skirt',
      ja: 'フラスカート'
    },
    category: 'clothing',
    rarity: 'rare',
    image: '/capy_skins/qf_hz2/preview/icon_hz2_3.png',
    description: {
      zh: '热带草裙，度假风情',
      en: 'Tropical hula skirt, vacation vibes',
      ja: 'トロピカルフラスカート、バケーション気分'
    }
  },

  // 手持类 (Shouchi = 3) - 6个高品质装扮
  {
    id: '3-10',
    name: {
      zh: '灯笼',
      en: 'Lantern',
      ja: '提灯'
    },
    category: 'handheld',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz3/qf_hz3_9_dengl.png',
    description: {
      zh: '传统红灯笼，禧年吉祥',
      en: 'Traditional red lantern, festive and auspicious',
      ja: '伝統的な赤提灯、祝祭的で縁起が良い'
    }
  },
  {
    id: '3-13',
    name: {
      zh: '骨头',
      en: 'Bone',
      ja: '骨'
    },
    category: 'handheld',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz3/qf_hz3_11_gutou.png',
    description: {
      zh: '原始骨头，野性力量',
      en: 'Primitive bone, wild power',
      ja: '原始的な骨、野生の力'
    }
  },
  {
    id: '3-5',
    name: {
      zh: '平底锅',
      en: 'Pan',
      ja: 'フライパン'
    },
    category: 'handheld',
    rarity: 'epic',
    image: '/capy_skins/qf_hz3/qf_hz3_4_guo.png',
    description: {
      zh: '厨房神器，美食制作',
      en: 'Kitchen artifact, food making',
      ja: 'キッチンの神器、料理作り'
    }
  },
  {
    id: '3-7',
    name: {
      zh: '大葱',
      en: 'Scallion',
      ja: '大葱'
    },
    category: 'handheld',
    rarity: 'epic',
    image: '/capy_skins/qf_hz3/qf_hz3_6_dacong.png',
    description: {
      zh: '新鲜大葱，健康生活',
      en: 'Fresh scallion, healthy life',
      ja: '新鮮な大葱、健康的な生活'
    }
  },
  {
    id: '3-11',
    name: {
      zh: '棒棒糖',
      en: 'Pop',
      ja: 'ロリポップ'
    },
    category: 'handheld',
    rarity: 'epic',
    image: '/capy_skins/qf_hz3/qf_hz3_8_tangg.png',
    description: {
      zh: '甜蜜棒棒糖，童年回忆',
      en: 'Sweet lollipop, childhood memories',
      ja: '甘いロリポップ、子供時代の思い出'
    }
  },
  {
    id: '3-14',
    name: {
      zh: '咸鱼',
      en: 'Salt Fish',
      ja: '塩魚'
    },
    category: 'handheld',
    rarity: 'epic',
    image: '/capy_skins/qf_hz3/qf_hz3_10_xianyu.png',
    description: {
      zh: '咸鱼翻身，逆袭人生',
      en: 'Salted fish turns over, life comeback',
      ja: '塩魚がひっくり返る、人生の逆転'
    }
  },

  // 木鱼类 (Muyu = 4) - 6个高品质装扮
  {
    id: '4-7',
    name: {
      zh: '小屁屁',
      en: 'Lit-Butt',
      ja: '小さなお尻'
    },
    category: 'woodblock',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz4/qf_hz4_3_kejipi.png',
    description: {
      zh: '可爱小屁屁，萌化人心',
      en: 'Cute little butt, melting hearts',
      ja: 'かわいい小さなお尻、心を溶かす'
    }
  },
  {
    id: '4-9',
    name: {
      zh: '麻将',
      en: 'Mahjong',
      ja: '麻雀'
    },
    category: 'woodblock',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz4/qf_hz4_9_majiang.png',
    description: {
      zh: '传统麻将，智慧博弈',
      en: 'Traditional mahjong, wisdom game',
      ja: '伝統的な麻雀、知恵のゲーム'
    }
  },
  {
    id: '4-4',
    name: {
      zh: '元宝',
      en: 'Yuan Bao',
      ja: '元宝'
    },
    category: 'woodblock',
    rarity: 'epic',
    image: '/capy_skins/qf_hz4/qf_hz4_12_yuanbao.png',
    description: {
      zh: '古代元宝，财富象征',
      en: 'Ancient yuan bao, symbol of wealth',
      ja: '古代の元宝、富の象徴'
    }
  },
  {
    id: '4-8',
    name: {
      zh: '电视',
      en: 'TV',
      ja: 'テレビ'
    },
    category: 'woodblock',
    rarity: 'epic',
    image: '/capy_skins/qf_hz4/qf_hz4_8_dianshi.png',
    description: {
      zh: '复古电视，怀旧情怀',
      en: 'Retro TV, nostalgic feelings',
      ja: 'レトロテレビ、ノスタルジックな気持ち'
    }
  },
  {
    id: '4-10',
    name: {
      zh: '存钱罐',
      en: 'Piggy',
      ja: '貯金箱'
    },
    category: 'woodblock',
    rarity: 'epic',
    image: '/capy_skins/qf_hz4/qf_hz4_10_cunqg.png',
    description: {
      zh: '可爱存钱罐，理财好习惯',
      en: 'Cute piggy bank, good financial habits',
      ja: 'かわいい貯金箱、良い金融習慣'
    }
  },
  {
    id: '4-1',
    name: {
      zh: '木鱼',
      en: 'Woodblock',
      ja: '木魚'
    },
    category: 'woodblock',
    rarity: 'rare',
    image: '/capy_skins/qf_hz4/qf_hz4_1_my.png',
    description: {
      zh: '传统木鱼，禅意悠远',
      en: 'Traditional woodblock, zen and distant',
      ja: '伝統的な木魚、禅意深遠'
    }
  },

  // 敲击文字类 (Text = 5) - 6个高品质装扮
  {
    id: '5-3',
    name: {
      zh: '哈哈哈',
      en: 'Haha',
      ja: '哈哈'
    },
    category: 'text',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz5/qf_hz5_q_7_haha.png',
    description: {
      zh: '开心大笑，欢乐无限',
      en: 'Laughing happily, endless joy',
      ja: '楽しく笑う、無限の喜び'
    }
  },
  {
    id: '5-8',
    name: {
      zh: '發',
      en: 'Fa',
      ja: '發'
    },
    category: 'text',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz5/qf_hz5_q_12_facai.png',
    description: {
      zh: '发财致富，好运连连',
      en: 'Get rich, good luck',
      ja: '金持ちになる、幸運続き'
    }
  },
  {
    id: '5-5',
    name: {
      zh: '订单',
      en: 'Order',
      ja: '注文'
    },
    category: 'text',
    rarity: 'epic',
    image: '/capy_skins/qf_hz5/qf_hz5_q_6_dingdan.png',
    description: {
      zh: '商业订单，生意兴隆',
      en: 'Business order, prosperous business',
      ja: 'ビジネス注文、商売繁盛'
    }
  },
  {
    id: '5-9',
    name: {
      zh: '金币',
      en: 'Coin',
      ja: '金貨'
    },
    category: 'text',
    rarity: 'epic',
    image: '/capy_skins/qf_hz5/qf_hz5_q_11_jinbi.png',
    description: {
      zh: '闪亮金币，财富积累',
      en: 'Shiny gold coin, wealth accumulation',
      ja: '輝く金貨、富の蓄積'
    }
  },
  {
    id: '5-10',
    name: {
      zh: '手指',
      en: 'M-Finger',
      ja: '指'
    },
    category: 'text',
    rarity: 'epic',
    image: '/capy_skins/qf_hz5/qf_hz5_q_10_zhonzhi.png',
    description: {
      zh: '指点江山，掌控全局',
      en: 'Point to the world, control the overall situation',
      ja: '世界を指差し、全体をコントロール'
    }
  },
  {
    id: '5-11',
    name: {
      zh: '眼睛',
      en: 'Eye',
      ja: '目'
    },
    category: 'text',
    rarity: 'epic',
    image: '/capy_skins/qf_hz5/qf_hz5_q_9_dayan.png',
    description: {
      zh: '明亮眼睛，洞察一切',
      en: 'Bright eyes, see through everything',
      ja: '明るい目、すべてを見通す'
    }
  },

  // 莲花底座类 (Lotus = 6) - 6个高品质装扮
  {
    id: '6-6',
    name: {
      zh: '鸭子泳圈',
      en: 'Swim Ring',
      ja: 'アヒル浮き輪'
    },
    category: 'lotus',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz6/qf_hz6_q_6_hh.png',
    description: {
      zh: '可爱鸭子泳圈，夏日清凉',
      en: 'Cute duck swim ring, summer coolness',
      ja: 'かわいいアヒル浮き輪、夏の涼しさ'
    }
  },
  {
    id: '6-9',
    name: {
      zh: '筋斗云',
      en: 'Xiang Yun',
      ja: '筋斗雲'
    },
    category: 'lotus',
    rarity: 'legendary',
    image: '/capy_skins/qf_hz6/qf_hz6_q_5_jindouy.png',
    description: {
      zh: '神话筋斗云，腾云驾雾',
      en: 'Mythical somersault cloud, soaring through clouds',
      ja: '神話の筋斗雲、雲を駆ける'
    }
  },
  {
    id: '6-4',
    name: {
      zh: '奥利奥',
      en: 'Oreo',
      ja: 'オレオ'
    },
    category: 'lotus',
    rarity: 'epic',
    image: '/capy_skins/qf_hz6/qf_hz6_h_7_aoliao.png',
    description: {
      zh: '经典奥利奥，甜蜜享受',
      en: 'Classic Oreo, sweet enjoyment',
      ja: 'クラシックオレオ、甘い楽しみ'
    }
  },
  {
    id: '6-7',
    name: {
      zh: '月饼',
      en: 'Mooncake',
      ja: '月餅'
    },
    category: 'lotus',
    rarity: 'epic',
    image: '/capy_skins/qf_hz6/qf_hz6_h_10_yuebing.png',
    description: {
      zh: '传统月饼，中秋团圆',
      en: 'Traditional mooncake, Mid-Autumn reunion',
      ja: '伝統的な月餅、中秋の再会'
    }
  },
  {
    id: '6-10',
    name: {
      zh: '莲花',
      en: 'Lotus',
      ja: '蓮花'
    },
    category: 'lotus',
    rarity: 'epic',
    image: '/capy_skins/qf_hz6/qf_hz6_q_3_zhixiang.png',
    description: {
      zh: '圣洁莲花，出淤泥而不染',
      en: 'Sacred lotus, pure from mud',
      ja: '聖なる蓮花、泥から清らか'
    }
  },
  {
    id: '6-1',
    name: {
      zh: '蒲团',
      en: 'Futon',
      ja: '蒲団'
    },
    category: 'lotus',
    rarity: 'rare',
    image: '/capy_skins/qf_hz6/qf_hz6_h_1_pt.png',
    description: {
      zh: '禅修蒲团，静心养性',
      en: 'Meditation futon, calm mind',
      ja: '禅修蒲団、心を静める'
    }
  }
]