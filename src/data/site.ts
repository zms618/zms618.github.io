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
    authors: ['Cheng He', 'Fufeng Chen', 'Fuhai Chen', 'Weiwei Guo', 'Chunxu Yang', 'Zhiwei Chen', 'Qingqing Zhou'],
    venue: 'Neurocomputing', rating: 'CAS Q2', badge: 'Neurocomputing', role: 'First Author', status: 'Under Review', featured: false, public: true,
    summary: 'CytoSet refines and spatially groups detection queries while coupling ordered center alignment with prediction quality, improving Bethesda-grade consistency and reducing high-risk cell downgrading errors in fine-grained detection.',
    highlights: ['Manuscript result: 39.08 ± 0.31 mAP', '+1.92 mAP over RT-DETR'], links: [],
  },
  {
    id: 'single-source-domain-generalization', title: 'Single-Source Domain Generalization',
    authors: [], venue: '', rating: '', badge: 'Under Review', role: 'First Author', status: 'Under Review', featured: false, public: true, showVenue: false,
    summary: 'We study single-source domain generalization for medical object detection, focusing on instance-level response heterogeneity under distribution shifts. The method improves robustness across scanners and datasets without additional inference-time computation.',
    highlights: [], links: [],
  },
  {
    id: 'morphology-steering', title: 'Image-Grounded Morphology Steering for Cervical Cytology Cell Detection',
    authors: [], venue: 'IEEE Transactions on Multimedia', rating: 'CCF-A', badge: 'TMM', role: 'Sixth Author', status: 'Under Review', featured: false, public: true,
    summary: 'Image-grounded morphology steering uses frozen text prototypes for semantic compatibility and bounded residuals at the final decoder layer to strengthen diagnostic morphology evidence, improving fine-grained discrimination and cross-domain localization in deformable detectors.', highlights: [], links: [],
  },
];

export const publicationGroups = {
  firstAuthor: ['tg-wspis', 'single-source-domain-generalization', 'cytoset'],
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
  tagline: 'My research focuses on reliable and label-efficient learning for medical image analysis, with computational pathology as the primary application domain. I study how to extract fine-grained visual evidence, learn from weak supervision and multimodal information, and improve model generalization across devices, institutions, and clinical settings.',
  taglineZh: '我的研究聚焦于医学图像分析中的可靠与低标注成本学习，并以计算病理学为主要研究场景。我关注如何提取细粒度视觉证据、利用弱监督与多模态信息进行学习，以及提升模型在不同设备、中心与临床场景下的泛化能力。',
  heroChips: ['Medical Image Analysis', 'Computational Pathology', 'Weakly Supervised & Multimodal Learning', 'Domain Generalization'],
  contact: {
    title: 'Open to discussions and collaborations in medical image analysis and reliable visual learning.',
    prefix: 'I am currently seeking',
    emphasis: 'PhD opportunities for Fall 2027',
    suffix: 'I would be glad to connect with researchers working on computational pathology, medical image segmentation and object detection, weakly supervised learning, multimodal learning, and domain generalization, and I am open to potential research collaborations and PhD opportunities.',
  },
  seo: {
    title: 'Cheng He — Computational Pathology & Medical Image Analysis',
    description: "Cheng He is a master’s student at Fuzhou University researching computational pathology, medical image analysis, weakly supervised and multimodal learning, and robust generalization.",
    keywords: ['Cheng He', '贺铖', 'Fuzhou University', 'Computational Pathology', 'Medical Image Analysis', 'Cervical Cytology', 'Weakly Supervised Learning', 'Multimodal Learning', 'Domain Generalization'],
  },
  links: { scholar: '', github: 'https://github.com/zms618', orcid: '', linkedin: '' },
  highlights: [
    { value: String(publications.filter(p => p.public).length), label: 'Papers', detail: `${publications.filter(p => p.public && p.role === 'First Author').length} first-author papers` },
    { value: '3', label: 'Research directions', detail: 'Pathology · Multimodal learning · Generalization' },
    { value: '3.4 / 4.0', label: 'Master’s GPA', detail: 'Computer Technology' },
    { value: '2027', label: 'Expected graduation', detail: 'Fuzhou University' },
  ],
  research: [
    { index: '01', title: 'Fine-grained Visual Evidence', question: 'How can we extract clinically meaningful fine-grained evidence from complex medical images?', description: 'I investigate cell-level detection and representation learning in computational pathology, including cervical cytology and whole-slide image analysis.', tags: ['Cell detection', 'Cervical cytology', 'Whole-slide images'] },
    { index: '02', title: 'Label-efficient & Multimodal Learning', question: 'How can we learn effectively when dense medical annotations are scarce?', description: 'I use textual descriptions and other inexpensive supervision signals to complement or replace costly dense annotations for medical image analysis.', tags: ['Weak supervision', 'Text-guided learning', 'Multimodal alignment'] },
    { index: '03', title: 'Robust & Generalizable Medical Vision', question: 'How can medical vision models remain reliable across devices, institutions, and clinical settings?', description: 'I study domain generalization and robust representations under scanner, center, preprocessing, and other distribution shifts.', tags: ['Domain generalization', 'Robust learning', 'Distribution shifts'] },
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
    { group: 'Deep Learning Research & Experimentation', items: ['PyTorch', 'Python', 'CUDA', 'Linux'], description: 'Able to independently implement, train, evaluate, and analyze medical vision models, with an emphasis on stable and reproducible experimentation.' },
    { group: 'Model Deployment & Computing Infrastructure', items: ['ONNX', 'TensorRT', 'GPU Infrastructure'], description: 'Experienced in model inference optimization and engineering deployment, while maintaining shared laboratory GPU servers and coordinating computing resources for research.' },
  ],
  whyPhd: {
    title: 'Research Directions I Want to Pursue',
    lead: 'I aim to develop reliable and label-efficient learning methods for medical image analysis, with a particular focus on computational pathology under weak supervision and distribution shifts.',
    paragraphs: [
      'My current research centers on three connected questions: how to learn fine-grained visual evidence from limited annotations or multimodal supervision; how to maintain robustness across scanners, institutions, and evolving data distributions; and how to support medical predictions with evidence that can be localized, quantified, and verified.',
      'During my PhD, I hope to further investigate trustworthy medical vision in weakly annotated and multi-center settings, particularly by connecting visual evidence in pathology with medical text, modeling cross-domain variation, and developing risk-aware learning strategies. My goal is to improve the auditability and cross-center applicability of medical imaging models and establish a stronger foundation for downstream clinical validation.',
    ],
  },
  about: {
    bio: 'I am a master’s student in Computer Technology at Fuzhou University, advised by Fuhai Chen. My research focuses on computational pathology and medical image analysis, particularly cervical cytology, weakly supervised and multimodal learning, and robust generalization across imaging domains.',
    education: [
      { school: 'Fuzhou University', degree: 'Professional Master’s in Computer Technology', date: 'Sep 2024 – Jun 2027 (expected)', detail: 'School of Computer and Data Science · GPA: 3.4 / 4.0' },
      { school: 'Yuzhang Normal University', degree: 'Undergraduate study in Data Science and Big Data Technology', date: 'Sep 2020 – Jun 2024', detail: 'Ranked 2nd in comprehensive evaluation in the major.' },
    ],
    awards: ['First Prize Academic Scholarship', 'Merit Student', 'Outstanding Graduate', 'Second Prize, Lanqiao Cup — Python'],
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
    heroChips: ['医学图像分析', '计算病理学', '弱监督与多模态学习', '领域泛化'],
    contact: {
      title: '期待围绕医学图像分析与可靠视觉学习开展交流与合作。',
      prefix: '我计划申请',
      emphasis: '2027 年入学的博士项目',
      suffix: '欢迎与我交流计算病理、弱监督学习、多模态学习与医学图像领域泛化等方向的研究，也期待潜在的科研合作与博士机会。',
    },
    seo: { ...site.seo, title: '贺铖 Cheng He — 计算病理学与医学图像分析', description: '贺铖，福州大学计算机技术专业硕士研究生，研究方向为计算病理学、医学图像分析、弱监督与多模态学习，以及跨域泛化与鲁棒学习。' },
    highlights: [
      { value: site.highlights[0].value, label: '论文总数', detail: `${publications.filter(p => p.public && p.role === 'First Author').length} 篇一作论文` },
      { value: '3', label: '研究方向', detail: '病理理解 · 多模态学习 · 泛化' },
      { value: '3.4 / 4.0', label: '硕士 GPA', detail: '计算机技术专业' },
      { value: '2027', label: '预计毕业', detail: '福州大学' },
    ],
    research: [
      { index: '01', title: '细粒度视觉证据', question: '如何从复杂医学图像中提取具有临床意义的细粒度证据？', description: '以计算病理为主要场景，研究细胞级检测与表征学习，包括宫颈细胞学与全切片图像分析。', tags: ['细胞检测', '宫颈细胞学', '全切片图像'] },
      { index: '02', title: '低标注成本与多模态学习', question: '当稠密医学标注稀缺时，如何有效学习？', description: '利用文本描述等低成本监督信号补充或替代昂贵的稠密标注，服务于医学图像分析。', tags: ['弱监督学习', '文本引导学习', '跨模态对齐'] },
      { index: '03', title: '鲁棒且可泛化的医学视觉', question: '如何让医学视觉模型在不同设备、机构与临床场景中保持可靠？', description: '研究扫描仪、中心、预处理及其他分布变化下的领域泛化与鲁棒表征。', tags: ['领域泛化', '鲁棒学习', '分布偏移'] },
    ],
    publications: publications.map(pub => ({ ...pub,
      title: pub.id === 'single-source-domain-generalization' ? '单源域泛化' : pub.title,
      rating: pub.rating === 'CAS Q2' ? '中科院二区' : pub.rating,
      role: ({ 'First Author': '第一作者', 'Fourth Author': '第四作者', 'Sixth Author': '第六作者' } as Record<string, string>)[pub.role] ?? pub.role,
      summary: ({"tg-wspis":"针对图像级标签难以刻画细胞分布异质性的问题，TG-WSPIS 通过三类文本描述与软对齐共识机制实现细粒度跨模态对齐，在仅使用文本弱监督的条件下取得接近全监督的病理图像分割效果。","counterfactual-fusion":"针对文本模态样本级可信度不均的问题，CRAFT 通过跨模态一致性估计文本可信度，并利用反事实分支削弱不可靠语言信息的影响，缓解语言主导的预测偏见并提升多模态融合鲁棒性。","dt-vg":"针对单张静态无人机图像中多段轨迹语义依赖与运动一致性难以建模的问题，DT-VG 通过层级化文本编码和物理感知结构约束联合建模语义与几何信息，实现连续、合理且几何精确的轨迹预测。","cytoset":"针对检测器忽略贝塞斯达类别顺序与跨级错误方向的问题，CytoSet 通过查询语义精炼、空间分组及有序中心对齐与质量耦合，改善细粒度检测的诊断等级一致性并减少高风险细胞的降级误判。","morphology-steering":"针对可变形检测器缺乏诊断形态引导、局部采样证据不足的问题，该方法通过冻结文本原型提供语义兼容性，并在最终解码器层施加有界残差，提升细微形态差异的判别能力与跨域定位精度。","single-source-domain-generalization":"我们研究医学目标检测中的单源域泛化问题，重点关注分布偏移条件下的实例级响应异质性。该方法在不增加推理阶段计算开销的情况下，提升了跨扫描设备与跨数据集评测中的模型鲁棒性。"} as Record<string, string>)[pub.id] ?? pub.summary,
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
      { group: '深度学习研究与实验', items: ['PyTorch', 'Python', 'CUDA', 'Linux'], description: '能够独立完成医学视觉模型的实现、训练、评测与实验分析，并关注实验的稳定性与可复现性。' },
      { group: '模型部署与计算基础设施', items: ['ONNX', 'TensorRT', 'GPU Infrastructure'], description: '具备模型推理优化与工程部署经验，并负责实验室共享 GPU 服务器维护与科研算力协调。' },
    ],
    whyPhd: {
      title: '我希望继续探索的研究方向',
      lead: '我致力于开发面向医学图像分析的可靠且标签高效的学习方法，尤其聚焦于弱监督与分布偏移条件下的计算病理学研究。',
      paragraphs: [
        '目前，我的研究围绕三个紧密关联的核心问题展开：如何在有限标注或多模态监督下学习细粒度的视觉证据；如何在不同扫描仪、医疗机构及动态变化的数据分布中保持模型的鲁棒性；以及如何使医学预测具备可定位、可量化且可验证的证据支撑。',
        '在博士阶段，我希望进一步研究弱标注及多中心场景下的可信医学视觉技术，重点探索将病理视觉证据与医学文本相关联、对跨域变异进行建模，以及开发风险感知型学习策略。我的目标是提升医学影像模型的可审计性与跨中心适用性，从而为下游临床验证提供更为可靠的证据支持。',
      ],
    },
    about: {
      bio: '我是贺铖，福州大学计算机与大数据学院计算机技术专业硕士研究生，导师为陈福海。我的研究聚焦于计算病理学与医学图像分析，主要关注宫颈细胞学、弱监督与多模态学习，以及跨设备、跨中心场景下的领域泛化与鲁棒学习。',
      education: [
        { school: '福州大学', degree: '计算机技术 · 专业型硕士研究生', date: '2024.09 – 2027.06（预计）', detail: '计算机与大数据学院 · GPA：3.4 / 4.0' },
        { school: '豫章师范学院', degree: '数据科学与大数据技术 · 本科', date: '2020.09 – 2024.06', detail: '数学与计算机学院 · 综合测评专业第二' },
      ],
      awards: ['学业奖学金一等奖', '三好学生', '优秀毕业生', '蓝桥杯 Python 组二等奖'],
    },
  };
}
