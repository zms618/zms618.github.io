export type Lang = 'en' | 'zh';
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  rating: string;
  badge: string;
  role: string;
  status: 'Accepted' | 'Under Review';
  featured: boolean;
  public: boolean;
  summary: string;
  image?: string;
  imageAlt?: string;
  imageAltZh?: string;
  highlights: string[];
  links: { label: string; href: string }[];
  showVenue?: boolean;
}

// Public profile content rendered by the bilingual homepage.
const publications: Publication[] = [
  {
    id: 'tg-wspis',
    title: 'TG-WSPIS: Multi-Granular Text-Guided Weakly Supervised Pathology Image Segmentation',
    authors: ['Cheng He', 'Yunhang Shen', 'Sheng Lian', 'Jipeng Wu', 'Chunxu Yang', 'Fufeng Chen', 'Xuri Ge', 'Fuhai Chen'],
    venue: 'IEEE International Conference on Multimedia & Expo', rating: 'CCF-B', badge: 'ICME 2026', role: 'First Author', status: 'Accepted', featured: true, public: true,
    summary: 'TG-WSPIS uses three granularities of text descriptions and soft-alignment consensus to model heterogeneous cellular distributions, achieving near-fully-supervised pathology segmentation with text-only weak supervision.',
    image: '/images/tg-wspis-method.png', imageAlt: 'Overview of the TG-WSPIS method',
    highlights: ['76.79% mIoU on BCSS-T3G', '+5.23 percentage points over ARML'],
    links: [{ label: 'Paper (PDF)', href: '/papers/tg-wspis-icme-2026.pdf' }, { label: 'Poster (PDF)', href: '/posters/tg-wspis-icme-2026.pdf' }, { label: 'Project repository', href: 'https://github.com/zms618/TG-WSPIS' }],
  },
  {
    id: 'counterfactual-fusion', title: 'Reliability-Aware Counterfactual Fusion for Debiased Multimodal Sentiment Analysis',
    authors: [], venue: 'Chinese Conference on Pattern Recognition and Computer Vision', rating: 'CCF-C', badge: 'PRCV 2026', role: 'Fourth Author', status: 'Accepted', featured: false, public: true,
    summary: 'CRAFT estimates sample-level text reliability through cross-modal consistency and uses a counterfactual branch to reduce unreliable language influence, mitigating language-dominated prediction bias and improving multimodal fusion robustness.', highlights: [], links: [],
  },
  {
    id: 'dt-vg', title: 'DT-VG: Multi-Segment Text-Guided Drone Trajectory Visual Grounding',
    authors: [], venue: 'Chinese Conference on Pattern Recognition and Computer Vision', rating: 'CCF-C', badge: 'PRCV 2026', role: 'Fourth Author', status: 'Accepted', featured: false, public: true,
    summary: 'DT-VG combines hierarchical text encoding with physics-aware structural constraints to capture multi-segment semantic dependencies and motion consistency, predicting continuous and geometrically precise trajectories from a single static drone image.', highlights: [], links: [],
  },
  {
    id: 'cytoset', title: 'CytoSet: Bethesda-Order-Aware Set Prediction for Cervical Cytology Cell Detection',
    authors: ['Cheng He', 'Fufeng Chen', 'Fuhai Chen', 'Weiwei Guo', 'Houbing Zheng', 'Chunxu Yang', 'Zhiwei Chen', 'Qingqing Zhou', 'Bin Fang'],
    venue: 'Neurocomputing', rating: 'CAS Q2', badge: 'Neurocomputing', role: 'First Author', status: 'Accepted', featured: true, public: true,
    summary: 'CytoSet refines and spatially groups detection queries while coupling ordered center alignment with prediction quality, improving Bethesda-grade consistency and reducing high-risk cell downgrading errors in fine-grained detection.',
    image: '/images/cytoset-architecture.png', imageAlt: 'CytoSet model architecture', imageAltZh: 'CytoSet 模型架构图',
    highlights: [], links: [],
  },
  {
    id: 'single-source-domain-generalization', title: 'Single-Source Domain Generalization',
    authors: [], venue: '', rating: '', badge: 'Under Review', role: 'First Author', status: 'Under Review', featured: false, public: true, showVenue: false,
    summary: 'We study single-source domain generalization for medical object detection, focusing on instance-level response heterogeneity under distribution shifts. The method improves robustness across scanners and datasets without additional inference-time computation.',
    highlights: [], links: [],
  },
  {
    id: 'multimodal-reliability-learning', title: 'Multimodal Reliability Learning',
    authors: [], venue: '', rating: '', badge: 'Under Review', role: 'First Author', status: 'Under Review', featured: false, public: true, showVenue: false,
    summary: 'We study multimodal reliability in vision-language models, focusing on the effective use of visual and linguistic information in complex scenes and under distribution shifts. This work aims to improve vision-language understanding, generalization, and prediction reliability.',
    highlights: [], links: [],
  },
  {
    id: 'morphology-steering', title: 'Image-Grounded Morphology Steering for Cervical Cytology Cell Detection',
    authors: [], venue: 'IEEE Transactions on Multimedia', rating: 'CCF-A', badge: 'TMM', role: 'Sixth Author', status: 'Under Review', featured: false, public: true,
    summary: 'Image-grounded morphology steering uses frozen text prototypes for semantic compatibility and bounded residuals at the final decoder layer to strengthen diagnostic morphology evidence, improving fine-grained discrimination and cross-domain localization in deformable detectors.', highlights: [], links: [],
  },
];

export const publicationGroups = {
  firstAuthor: ['tg-wspis', 'cytoset', 'single-source-domain-generalization', 'multimodal-reliability-learning'],
  collaborative: ['counterfactual-fusion', 'dt-vg', 'morphology-steering'],
};

export const site = {
  isPlaceholder: false,
  initials: 'CH',
  avatar: '/images/cheng-he.png',
  name: 'Cheng He', nameZh: '贺铖', location: 'Fuzhou, China',
  email: '241027149@fzu.edu.cn', cv: '/cv/he-cheng-cv.pdf',
  affiliation: 'Fuzhou University', school: 'School of Computer and Data Science', role: "Master’s Student",
  advisor: { name: 'Fuhai Chen', href: 'https://ccds.fzu.edu.cn/info/1204/9782.htm' },
  heroIdentity: 'M.S. Student at Fuzhou University · Applying for Fall 2027 PhD programs',
  tagline: 'I study computer vision and deep learning, with computational pathology as my primary application domain. My research explores fine-grained object detection, weakly supervised and multimodal visual learning, and domain generalization and robust representation learning.',
  taglineZh: '我的研究主要涉及计算机视觉与深度学习，以计算病理学为主要应用场景，关注细粒度目标检测、弱监督与多模态视觉学习，以及领域泛化与鲁棒表征学习。',
  heroChips: ['Computer Vision', 'Multimodal Learning', 'Computational Pathology', 'Domain Generalization'],
  contact: {
    title: 'Open to research discussions and collaborations in computer vision, multimodal learning, and computational pathology.',
    prefix: 'I am currently seeking',
    emphasis: 'PhD opportunities for Fall 2027',
    suffix: 'I welcome academic discussions in computer vision, multimodal learning, computational pathology, and emerging AI technologies, and look forward to exploring research questions, collaborations, and PhD opportunities.',
  },
  seo: {
    title: 'Cheng He | Computer Vision · Multimodal Learning · Computational Pathology',
    description: 'Cheng He is a master’s student at Fuzhou University studying computer vision, multimodal learning, computational pathology, weakly supervised learning, and domain generalization.',
    keywords: ['Cheng He', '贺铖', 'Fuzhou University', 'Computer Vision', 'Computational Pathology', 'Medical Image Analysis', 'Weakly Supervised Learning', 'Multimodal Learning', 'Domain Generalization'],
  },
  links: { scholar: '', github: 'https://github.com/zms618', orcid: '', linkedin: '' },
  highlights: [
    { value: String(publications.filter(p => p.public).length), label: 'Papers', detail: `${publications.filter(p => p.public && p.role === 'First Author').length} first-author papers` },
    { value: '3', label: 'Research directions', detail: 'Pathology · Multimodal learning · Generalization' },
    { value: '3.4 / 4.0', label: 'Master’s GPA', detail: 'Computer Technology' },
    { value: '2027', label: 'Expected graduation', detail: 'Fuzhou University' },
  ],
  research: [
    { index: '01', title: 'Computational Pathology & Fine-grained Visual Analysis', question: 'How can we extract meaningful fine-grained evidence and model structured visual representations?', description: 'I study cell detection and representation learning in computational pathology, including cervical cytology and whole-slide image analysis.', tags: ['Object detection', 'Structured representations', 'Whole-slide images'] },
    { index: '02', title: 'Weakly Supervised & Multimodal Visual Learning', question: 'How can we learn from limited annotations and reason with multimodal information of varying reliability?', description: 'My work explores text-guided weak supervision, vision-language alignment, and reliable use of visual and linguistic evidence.', tags: ['Weak supervision', 'Vision-language alignment', 'Multimodal reliability'] },
    { index: '03', title: 'Domain Generalization & Robust Representation Learning', question: 'How can learned representations remain reliable under distribution shifts?', description: 'I investigate single-source domain generalization, using cross-scanner and cross-dataset medical object detection to study robustness beyond the training distribution.', tags: ['Domain generalization', 'Robust representations', 'Distribution shifts'] },
  ],
  publications,
  projects: [
    {
      eyebrow: 'Fujian Provincial Health Commission · Science and Technology Program',
      title: 'Cervical Glandular Lesion Cell Recognition via Multimodal Data Fusion',
      date: '2024 – 2026', metrics: ['Technical Lead (Visual Screening)', 'Cervical Cytology', 'TCT WSI Screening'],
      problem: 'Cervical cytology slides lack the relatively stable spatial structure and contextual information found in histopathology, while abnormal cells are sparse, morphological differences are subtle, and whole-slide images are extremely large. The core challenge in automated TCT screening is to identify diagnostically meaningful abnormal cells within vast numbers of normal cells and complex backgrounds, then form a reliable slide-level screening result.',
      approach: 'I lead the visual screening pipeline from TCT WSI processing and cell detection to abnormal-cell evidence aggregation, slide-level prediction, and evaluation, including experimental dataset construction, model training, result analysis, and screening-threshold selection.',
      outcome: 'In internal validation, the model achieved approximately 50% specificity at a high-recall operating point of 95% sensitivity, enabling effective triage of many negative slides while prioritizing the detection of abnormal cases. In a screening setting with an abnormal-case prevalence of about 10%, this corresponds to an estimated 45% of all slides entering a low-risk queue, shifting manual review from exhaustive screening toward prioritized review of high-risk cases and key cells.',
      resultMetrics: [
        { value: '95%', label: 'Sensitivity' },
        { value: '50%', label: 'Specificity' },
        { value: '≈45%', label: 'Potential Low-risk Triage' },
      ],
      clinicalValue: 'The project establishes a complete analytical pathway from ultra-high-resolution WSI to cell-level evidence and then to slide-level screening results. This workflow may reduce repetitive review of negative slides in large-scale cervical cytology screening and direct limited human review capacity toward high-risk cases and diagnostically important regions.',
      link: '',
    },
  ],
  capabilities: [
    { group: 'Medical Imaging & WSI Processing', items: ['OpenSlide', 'OpenCV', 'WSI Processing'], description: 'Experienced in whole-slide image processing, patch construction, and pathology data organization, supporting both cell-level analysis and WSI-level research workflows.' },
    { group: 'Deep Learning & Model Engineering', items: ['Python', 'PyTorch', 'CUDA', 'ONNX', 'TensorRT'], description: 'Able to independently implement, train, debug, and evaluate computer vision models, with experience in ONNX export and TensorRT inference optimization and an emphasis on reproducible experimentation.' },
    { group: 'Linux & Research Computing Infrastructure', items: ['Linux', 'GPU Servers', 'CUDA', 'System Administration'], description: 'Independently responsible for the laboratory’s Linux/GPU server maintenance, including NVIDIA drivers, CUDA and deep learning environments, user permissions, and troubleshooting. I coordinate shared computing resources and support reliable environments for the team’s model training and experiments.' },
    { group: 'AI-assisted Research & Development', items: ['Claude Code', 'Codex', 'Agent Skills'], description: 'I use AI coding tools for research development and experimental iteration, and develop open-source Agent Skills for paper reading, research idea discovery, and verification. This practice involves research task decomposition, workflow design, and evidence checking.' },
  ],
  researchTools: { label: 'Explore academic-skills on GitHub', href: 'https://github.com/zms618/no-heartburn-academic-skills' },
  whyPhd: {
    title: 'Research Interests & Exploration',
    lead: 'During my master’s studies, I have investigated fine-grained visual perception, weakly supervised and multimodal learning, and domain generalization, gaining experience in algorithm design, model implementation, experimental validation, and scientific writing.',
    paragraphs: [
      'Beyond my current work, I follow advances in vision-language-action models (VLA), world models, and AI agents through literature reading and technical exploration.',
      'Building on my research experience, I hope to explore questions with scientific and practical value while remaining open to cross-disciplinary research and academic exchange.',
    ],
  },
  about: {
    studentLeadership: 'Class Representative, Master’s Program, Fuzhou University.',
    bio: 'I am a master’s student in Computer Technology at Fuzhou University, advised by Fuhai Chen. My research spans computer vision, multimodal learning, and computational pathology, including fine-grained object detection, weakly supervised learning, and domain generalization. I also follow emerging AI technologies and cross-disciplinary research.',
    education: [
      { school: 'Fuzhou University', degree: 'Professional Master’s in Computer Technology', date: 'Sep 2024 – Jun 2027 (expected)', detail: 'School of Computer and Data Science · GPA: 3.4 / 4.0' },
      { school: 'Yuzhang Normal University', degree: 'Undergraduate study in Data Science and Big Data Technology', date: 'Sep 2020 – Jun 2024', detail: 'Ranked 2nd in comprehensive evaluation in the major.' },
    ],
    awards: [
      { stage: 'Master’s · Fuzhou University', items: ['Outstanding Student Leader', 'Third Prize, Midterm Scholarship'] },
      { stage: 'Undergraduate · Yuzhang Normal University', items: ['First Prize Academic Scholarship', 'Merit Student', 'Outstanding Graduate', 'Second Prize, Lanqiao Cup — Python'] },
    ],
  },
};
export type SiteData = typeof site;

// Keep localized personal content alongside the English source rather than in page markup.
export function getSite(lang: Lang): SiteData {
  if (lang === 'en') return site;
  return {
    ...site, name: site.nameZh, location: '中国 · 福州', affiliation: '福州大学', school: '计算机与大数据学院', role: '硕士研究生',
    advisor: { ...site.advisor, name: '陈福海' }, tagline: site.taglineZh,
    heroIdentity: '福州大学硕士研究生 · 2027 Fall 博士申请',
    heroChips: ['计算机视觉', '多模态学习', '计算病理学', '领域泛化'],
    contact: {
      title: '期待围绕计算机视觉、多模态学习与计算病理学开展交流与合作。',
      prefix: '我计划申请',
      emphasis: '2027 年入学的博士项目',
      suffix: '欢迎围绕计算机视觉、多模态学习、计算病理学及人工智能前沿技术展开学术交流，期待进一步探索有价值的科研问题与合作机会。',
    },
    seo: { ...site.seo, title: '贺铖 Cheng He | 计算机视觉 · 多模态学习 · 计算病理学', description: '贺铖，福州大学计算机技术专业硕士研究生，研究涉及计算机视觉、多模态学习、计算病理学、弱监督学习及领域泛化。' },
    highlights: [
      { value: site.highlights[0].value, label: '论文总数', detail: `${publications.filter(p => p.public && p.role === 'First Author').length} 篇一作论文` },
      { value: '3', label: '研究方向', detail: '病理理解 · 多模态学习 · 泛化' },
      { value: '3.4 / 4.0', label: '硕士 GPA', detail: '计算机技术专业' },
      { value: '2027', label: '预计毕业', detail: '福州大学' },
    ],
    research: [
      { index: '01', title: '计算病理学与细粒度视觉分析', question: '如何提取有意义的细粒度视觉证据，并构建结构化视觉表征？', description: '以计算病理为主要场景，研究细胞检测与表征学习，包括宫颈细胞学与全切片图像分析。', tags: ['目标检测', '结构化表征', '全切片图像'] },
      { index: '02', title: '弱监督与多模态视觉学习', question: '如何在有限标注下学习，并有效利用可靠性不同的多模态信息进行推理？', description: '探索文本引导的弱监督学习、视觉—语言对齐，以及视觉与语言证据的可靠利用。', tags: ['弱监督学习', '视觉—语言对齐', '多模态可靠性'] },
      { index: '03', title: '领域泛化与鲁棒表征学习', question: '如何让学到的表征在分布变化下保持可靠？', description: '研究单源领域泛化，以跨扫描设备、跨数据集的医学目标检测为场景，探索训练分布之外的模型鲁棒性。', tags: ['领域泛化', '鲁棒表征', '分布偏移'] },
    ],
    publications: publications.map(pub => ({ ...pub,
      title: ({ 'single-source-domain-generalization': '单源域泛化', 'multimodal-reliability-learning': '多模态可靠性学习' } as Record<string, string>)[pub.id] ?? pub.title,
      rating: pub.rating === 'CAS Q2' ? '中科院二区' : pub.rating,
      role: ({ 'First Author': '第一作者', 'Fourth Author': '第四作者', 'Sixth Author': '第六作者' } as Record<string, string>)[pub.role] ?? pub.role,
      summary: ({"tg-wspis":"针对图像级标签难以刻画细胞分布异质性的问题，TG-WSPIS 通过三类文本描述与软对齐共识机制实现细粒度跨模态对齐，在仅使用文本弱监督的条件下取得接近全监督的病理图像分割效果。","counterfactual-fusion":"针对文本模态样本级可信度不均的问题，CRAFT 通过跨模态一致性估计文本可信度，并利用反事实分支削弱不可靠语言信息的影响，缓解语言主导的预测偏见并提升多模态融合鲁棒性。","dt-vg":"针对单张静态无人机图像中多段轨迹语义依赖与运动一致性难以建模的问题，DT-VG 通过层级化文本编码和物理感知结构约束联合建模语义与几何信息，实现连续、合理且几何精确的轨迹预测。","cytoset":"针对检测器忽略贝塞斯达类别顺序与跨级错误方向的问题，CytoSet 通过查询语义精炼、空间分组及有序中心对齐与质量耦合，改善细粒度检测的诊断等级一致性并减少高风险细胞的降级误判。","morphology-steering":"针对可变形检测器缺乏诊断形态引导、局部采样证据不足的问题，该方法通过冻结文本原型提供语义兼容性，并在最终解码器层施加有界残差，提升细微形态差异的判别能力与跨域定位精度。","single-source-domain-generalization":"我们研究医学目标检测中的单源域泛化问题，重点关注分布偏移条件下的实例级响应异质性。该方法在不增加推理阶段计算开销的情况下，提升了跨扫描设备与跨数据集评测中的模型鲁棒性。","multimodal-reliability-learning":"我们研究视觉语言模型中的多模态可靠性问题，重点关注复杂场景与分布变化条件下视觉与语言信息的有效利用。该研究旨在提升模型的视觉语言理解能力、泛化性能与预测可靠性。"} as Record<string, string>)[pub.id] ?? pub.summary,
      highlights: pub.highlights.map(text => text.replace('Manuscript result:', '稿件报告结果：').replace('over the strongest source-only competitor', '（相对最强 source-only 对比方法）').replace('average', '平均').replace('+5.23 percentage points over ARML', '较 ARML 提高 5.23 个百分点')),
      links: pub.links.map(link => ({ ...link, label: ({ 'Paper (PDF)': '论文（PDF）', 'Poster (PDF)': '海报（PDF）', 'Project repository': '项目仓库' } as Record<string, string>)[link.label] ?? link.label })),
    })),
    projects: [{
      ...site.projects[0],
      eyebrow: '福建省卫健委科技计划项目',
      title: '基于多模态数据融合算法的宫颈腺上皮病变细胞识别研究',
      metrics: ['主要技术负责人（视觉筛查方向）', '宫颈细胞学', 'TCT WSI 智能筛查'],
      problem: '宫颈细胞学切片缺乏组织病理中相对稳定的空间结构与上下文信息，同时异常细胞稀疏、形态差异细微、全切片图像分辨率极高。如何从海量正常细胞与复杂背景中识别具有诊断价值的异常细胞，并进一步形成可靠的切片级筛查结果，是自动化 TCT 筛查中的核心挑战。',
      approach: '主导视觉筛查技术路线，完成从 TCT WSI 数据处理、细胞检测、异常细胞证据聚合到切片级预测与评测的完整流程，包括实验数据构建、模型训练、结果分析及筛查阈值选择。',
      outcome: '在内部验证中，模型在 95% 敏感度的高召回筛查工作点下达到约 50% 特异度，在优先保证异常病例检出的同时，实现对大量阴性切片的有效分流。以异常率约 10% 的筛查场景为例，据此估算约 45% 的全部切片可进入低风险队列，使人工阅片由全量筛查转向高风险病例与重点细胞优先复核。',
      resultMetrics: [
        { value: '95%', label: '敏感度' },
        { value: '50%', label: '特异度' },
        { value: '≈45%', label: '潜在低风险分流' },
      ],
      clinicalValue: '构建了从超高分辨率 WSI 到细胞级证据，再到切片级筛查结果的完整分析链路。该流程有望减少大规模宫颈细胞学筛查中的重复阴性阅片工作，将有限的人工阅片资源更多集中于高风险病例及诊断关键区域。',
    }],
    capabilities: [
      { group: '医学图像与 WSI 数据处理', items: ['OpenSlide', 'OpenCV', 'WSI Processing'], description: '具备全切片图像处理、Patch 构建与病理数据组织经验，支持细胞级分析与 WSI 级研究流程。' },
      { group: '深度学习与模型工程', items: ['Python', 'PyTorch', 'CUDA', 'ONNX', 'TensorRT'], description: '能够独立完成计算机视觉模型的实现、训练调试、评测与实验分析，具备 ONNX 模型转换与 TensorRT 推理优化经验，重视实验的可复现性。' },
      { group: 'Linux 与科研计算环境', items: ['Linux', 'GPU Servers', 'CUDA', '系统管理'], description: '独立负责实验室 Linux/GPU 服务器的日常运维，包括 NVIDIA 驱动维护、CUDA 与深度学习环境配置、用户权限管理和故障排查；协调共享算力，为课题组模型训练与实验运行提供稳定的科研计算环境。' },
      { group: 'AI 辅助科研与开发', items: ['Claude Code', 'Codex', 'Agent Skills'], description: '使用 AI 编程工具支持科研开发与实验迭代，设计并开源辅助论文阅读、科研创新点发现与验证的 Agent Skills，具备科研任务拆解、工作流设计与证据核查的实践经验。' },
    ],
    researchTools: { ...site.researchTools, label: '在 GitHub 查看 academic-skills' },
    whyPhd: {
      title: '研究兴趣与学术探索',
      lead: '硕士阶段，我围绕细粒度视觉感知、弱监督与多模态学习、领域泛化等问题开展研究，积累了算法设计、模型实现、实验验证及科研论文写作经验。',
      paragraphs: [
        '除已有研究工作外，我也关注视觉—语言—动作模型（VLA）、世界模型（World Models）及 AI Agent 等人工智能前沿进展，通过文献研读和技术实践拓展研究视野。',
        '希望在已有科研积累的基础上，持续探索具有科学价值与实际意义的研究问题，并保持跨领域研究与学术交流的开放性。',
      ],
    },
    about: {
      studentLeadership: '学生工作：担任福州大学硕士班班长。',
      bio: '我是贺铖，福州大学计算机与大数据学院计算机技术专业硕士研究生，导师为陈福海。我的研究主要涉及计算机视觉、多模态学习与计算病理学，包括细粒度目标检测、弱监督学习及领域泛化，并持续关注人工智能前沿技术与跨领域研究进展。',
      education: [
        { school: '福州大学', degree: '计算机技术 · 专业型硕士研究生', date: '2024.09 – 2027.06（预计）', detail: '计算机与大数据学院 · GPA：3.4 / 4.0' },
        { school: '豫章师范学院', degree: '数据科学与大数据技术 · 本科', date: '2020.09 – 2024.06', detail: '数学与计算机学院 · 综合测评专业第二' },
      ],
      awards: [
        { stage: '硕士阶段 · 福州大学', items: ['优秀学生干部', '中期奖学金三等奖'] },
        { stage: '本科阶段 · 豫章师范学院', items: ['学业奖学金一等奖', '三好学生', '优秀毕业生', '蓝桥杯 Python 组二等奖'] },
      ],
    },
  };
}
