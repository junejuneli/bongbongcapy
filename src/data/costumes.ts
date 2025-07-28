export interface Costume {
  id: string
  name: {
    zh: string
    en: string
    ja: string
  }
  category: 'headwear' | 'clothing' | 'merit'
  rarity: 'legendary' | 'epic' | 'rare' | 'common'
  image: string
  description: {
    zh: string
    en: string
    ja: string
  }
}

export const costumes: Costume[] = [
  // 头饰类
  {
    id: 'qf_hz1_1',
    name: {
      zh: '橘子仙子',
      en: 'Orange Fairy',
      ja: 'オレンジフェアリー'
    },
    category: 'headwear',
    rarity: 'legendary',
    image: '/服装/qf_hz1/qf_hz1_1_juzi.png',
    description: {
      zh: '橘香满园，仙气飘飘',
      en: 'Orange fragrance, fairy aura',
      ja: 'オレンジの香り、仙気漂う'
    }
  },
  {
    id: 'qf_hz1_3',
    name: {
      zh: '官帽威严',
      en: 'Official Hat',
      ja: '官帽威厳'
    },
    category: 'headwear',
    rarity: 'rare',
    image: '/服装/qf_hz1/qf_hz1_3_guanmao.png',
    description: {
      zh: '古代官员威严形象',
      en: 'Ancient official dignity',
      ja: '古代官僚の威厳'
    }
  },
  {
    id: 'qf_hz1_4',
    name: {
      zh: '厨师帽',
      en: 'Chef Hat',
      ja: 'シェフハット'
    },
    category: 'headwear',
    rarity: 'common',
    image: '/服装/qf_hz1/qf_hz1_4_chushimao.png',
    description: {
      zh: '专业厨师装扮',
      en: 'Professional chef look',
      ja: 'プロシェフスタイル'
    }
  },
  {
    id: 'qf_hz1_6',
    name: {
      zh: '王冠荣耀',
      en: 'Royal Crown',
      ja: '王冠の栄光'
    },
    category: 'headwear',
    rarity: 'legendary',
    image: '/服装/qf_hz1/qf_hz1_6_wangguan.png',
    description: {
      zh: '王者风范，至高荣誉',
      en: 'Royal majesty, supreme honor',
      ja: '王者の風格、至高の栄誉'
    }
  },
  {
    id: 'qf_hz1_8',
    name: {
      zh: '天使光环',
      en: 'Angel Halo',
      ja: '天使の光輪'
    },
    category: 'headwear',
    rarity: 'legendary',
    image: '/服装/qf_hz1/qf_hz1_8_tianshi.png',
    description: {
      zh: '圣洁天使，纯净治愈',
      en: 'Holy angel, pure healing',
      ja: '聖なる天使、純粋な癒し'
    }
  },

  // 服装类
  {
    id: 'qf_hz1_2',
    name: {
      zh: '唐僧法袍',
      en: 'Monk Robe',
      ja: '唐僧法衣'
    },
    category: 'clothing',
    rarity: 'epic',
    image: '/服装/qf_hz1/qf_hz1_2_tangseng.png',
    description: {
      zh: '西游记主题，庄严神圣',
      en: 'Journey to the West theme, solemn and sacred',
      ja: '西遊記テーマ、荘厳神聖'
    }
  },
  {
    id: 'qf_hz1_7',
    name: {
      zh: '加法铠甲',
      en: 'Math Armor',
      ja: '加算アーマー'
    },
    category: 'clothing',
    rarity: 'epic',
    image: '/服装/qf_hz1/qf_hz1_7_jiafa.png',
    description: {
      zh: '数学主题，智慧力量',
      en: 'Math theme, wisdom and power',
      ja: '数学テーマ、知恵と力'
    }
  },
  {
    id: 'qf_hz3_2',
    name: {
      zh: '胡萝卜装',
      en: 'Carrot Suit',
      ja: 'ニンジンスーツ'
    },
    category: 'clothing',
    rarity: 'common',
    image: '/服装/qf_hz3/qf_hz3_2_huluobo.png',
    description: {
      zh: '健康营养，充满活力',
      en: 'Healthy nutrition, full of vitality',
      ja: '健康栄養、活力満点'
    }
  },
  {
    id: 'qf_hz3_3',
    name: {
      zh: '竹子清装',
      en: 'Bamboo Outfit',
      ja: '竹清装'
    },
    category: 'clothing',
    rarity: 'rare',
    image: '/服装/qf_hz3/qf_hz3_3_zhuzi.png',
    description: {
      zh: '高洁竹子，君子风范',
      en: 'Noble bamboo, gentleman style',
      ja: '高潔な竹、君子風格'
    }
  },
  {
    id: 'qf_hz3_4',
    name: {
      zh: '竹影摇曳',
      en: 'Swaying Bamboo',
      ja: '竹影揺曳'
    },
    category: 'clothing',
    rarity: 'rare',
    image: '/服装/qf_hz3/qf_hz3_4_zhuzi.png',
    description: {
      zh: '竹影优雅，动人心弦',
      en: 'Elegant bamboo shadow, touching',
      ja: '竹影優雅、心に響く'
    }
  },
  {
    id: 'qf_hz3_7',
    name: {
      zh: '山峦叠翠',
      en: 'Mountain Layers',
      ja: '山峦疊翠'
    },
    category: 'clothing',
    rarity: 'epic',
    image: '/服装/qf_hz3/qf_hz3_7_san.png',
    description: {
      zh: '山水画风，意境深远',
      en: 'Landscape painting style, profound',
      ja: '山水画風、意境深遠'
    }
  },

  // 功德类
  {
    id: 'qf_hz1_5',
    name: {
      zh: '螺旋奇迹',
      en: 'Spiral Miracle',
      ja: 'スパイラルミラクル'
    },
    category: 'merit',
    rarity: 'rare',
    image: '/服装/qf_hz1/qf_hz1_5_luoxuan.png',
    description: {
      zh: '神秘螺旋，奇妙力量',
      en: 'Mysterious spiral, magical power',
      ja: '神秘スパイラル、奇跡の力'
    }
  },
  {
    id: 'qf_hz3_1',
    name: {
      zh: '田园小麦',
      en: 'Pastoral Wheat',
      ja: '田園小麦'
    },
    category: 'merit',
    rarity: 'common',
    image: '/服装/qf_hz3/qf_hz3_1_my.png',
    description: {
      zh: '朴实田园，回归自然',
      en: 'Simple pastoral, return to nature',
      ja: '素朴田園、自然回帰'
    }
  },
  {
    id: 'qf_hz3_5',
    name: {
      zh: '狼牙威武',
      en: 'Wolf Fang Power',
      ja: '狼牙威武'
    },
    category: 'merit',
    rarity: 'epic',
    image: '/服装/qf_hz3/qf_hz3_5_langya.png',
    description: {
      zh: '野性力量，霸气十足',
      en: 'Wild power, mighty and domineering',
      ja: '野性の力、覇気十分'
    }
  },
  {
    id: 'qf_hz3_6',
    name: {
      zh: '大葱清香',
      en: 'Fresh Scallion',
      ja: '大葱清香'
    },
    category: 'merit',
    rarity: 'common',
    image: '/服装/qf_hz3/qf_hz3_6_dacong.png',
    description: {
      zh: '日常蔬菜，生活气息',
      en: 'Daily vegetable, life atmosphere',
      ja: '日常野菜、生活の香り'
    }
  }
] 