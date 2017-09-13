export default {
  activeLanguage: navigator.language.slice(0, 2),
  country: null,
  translations: {
    en: {
      messages: {
        'navbar.login.title': 'Login',
        'navbar.cart.total-price': 'Total Price',
        'navbar.cart.cart-button': 'My Cart',
        'navbar.cart.link.view-cart': 'View Cart',
        'navbar.cart.link.checkout': 'Checkout',
        'navbar.cart.empty': 'Your Cart Is Currently Empty',
        'navbar.cart.loading': 'Your Cart Is Loading...',
        'navbar.cart.promotion.line1': 'Buy 4 Bottles',
        'navbar.cart.promotion.line2': 'Get 25% Off',
        'navbar.cart.recently-added': 'Recently Added Item(s)',
        'navbar.nav.juices.title': 'JUICES',
        'navbar.nav.juices.recommend': 'Recommend Another Juices Line',
        'navbar.nav.juices.discount.percentage': 'Get 10% OFF',
        'navbar.nav.juices.discount.reason': 'When You Become A Member',
        'navbar.nav.juices.choose-flavor.title': 'Choose A Flavor!',
        'navbar.nav.juices.description.title': 'Nicotine Juices:',
        'navbar.nav.juices.description': 'N2JP prides itself on offering our customers top quality products and service.  We want your experiences doing business with us to be so good, that we become your #1 choice for all your vape juice needs.  Our customers love us, and we plan on making sure you do to.  You’ll find all our juice offers below.  If you have any questions, don’t hesitate to ask us.  Enjoy your experience “making the switch.”',
        'navbar.nav.media.title': 'MEDIA',
        'navbar.nav.contact-us.title': 'Contact Us',
        'navbar.nav.juice-reviews.title': 'Juice Reviews',
        'navbar.nav.vape-news.title': 'Vape News',
        'navbar.nav.user-stories.title': 'User Stories',
        'navbar.nav.info.title': 'INFO',
        'navbar.nav.info.links.about': 'About',
        'navbar.nav.info.links.faqs': 'FAQs',
        'navbar.nav.info.links.contact-us': 'Contact Us',
        'navbar.nav.info.links.shipping-policy': 'Shipping Policy',
        'navbar.nav.info.links.return-policy': 'Return Policy',
        'navbar.nav.info.links.privacy-policy': 'Privacy Policy',
        'navbar.nav.info.links.terms-and-conditions': 'Terms & Conditions',
        'navbar.nav.info.links.nicotine-disclaimer': 'Nicotine Disclaimer',

        'product.single.loading': 'Loading...',
        'product.breadcrumb.paths1': 'Home',
        'product.breadcrumb.lastCrumb': 'Juice Page',
        'product.modal.bulk.title': 'Lets make a Deal!',
        'product.modal.bulk.subtitle1': 'BUY 4 BOTTLES',
        'product.modal.bulk.subtitle2': 'and we\'ll slice',
        'product.modal.bulk.subtitle3': 'the price.',
        'product.modal.bulk.title.example': 'Example:',
        'product.modal.bulk.header.qty': 'QTY',
        'product.modal.bulk.header.description': 'Description',
        'product.modal.bulk.header.price': 'Price',
        'product.modal.bulk.row.qty': '4',
        'product.modal.bulk.row.flavor': 'Fruity Bamm-Bamm',
        'product.modal.bulk.row.strength': 'Nicotine Strength:',
        'product.modal.bulk.row.subtotal': 'Subtotal',
        'product.modal.bulk.row.tax': 'Tax',
        'product.modal.bulk.row.discount': 'Discount',
        'product.modal.bulk.row.shipping': 'Free International Shipping',
        'product.modal.bulk.row.total': 'Grand Total',
        'product.modal.bulk.btns.close': 'Close',
        'product.modal.bulk.msg.oh': 'Oh!',
        'product.modal.bulk.msg.mention': 'Did we mention you get',
        'product.modal.bulk.msg.intl-shipping': 'International Shipping!',
        'product.modal.bulk.msg.lets-do-it': 'Let\'s Do It!',
        'product.modal.register.title': 'Not A Member Yet?',
        'product.modal.register.become': 'Become a member and get',
        'product.modal.register.first-order': 'your first order!',
        'product.modal.register.discount-also': 'Also,',
        'product.modal.register.discount-bottles': 'Buy 4 Bottles',
        'product.modal.register.discount-additional': 'and get an additional',
        'product.modal.register.discount-whoah': 'Whoah! That\'s',
        'product.modal.register.discount-example': 'Example: ',
        'product.modal.register.header.qty': 'QTY',
        'product.modal.register.header.description': 'Juice Description',
        'product.modal.register.header.price': 'Price',
        'product.modal.register.row.flavor': 'Fruity Bamm-Bamm',
        'product.modal.register.row.strength': 'Nicotine Strength: ',
        'product.modal.register.row.subtotal': 'Subtotal',
        'product.modal.register.row.tax': 'Tax',
        'product.modal.register.row.discount': 'Discount',
        'product.modal.register.row.shipping': 'Free International Shipping',
        'product.modal.register.row.total': 'Grand Total',
        'product.modal.register.btns.close': 'Close',
        'product.modal.register.btns.sign-up': 'Sign Me Up',
        'product.modal.success.juices-have': 'juices have',
        'product.modal.success.juice-has': 'juices have',
        'product.modal.success.added-msg': 'been successfully added to your cart',
        'product.modal.success.continue-shopping': 'Continue Shopping',
        'product.modal.success.express-checkout': 'Express Checkout',


        'home.header.title': 'Fastest Nicotine e-Juice Delivery In Japan',
        'home.header.subtitle': 'Guaranteed!',
        'home.header.button.buyNow': 'Buy Now!',
        'home.fastest.title': 'Fastest Delivery',
        'home.fastest.subtitle': 'Nobody is faster in Japan',
        'home.fastest.desc1': 'No one can deliver Nicotine E-Juice to Japan faster than us.',
        'home.fastest.desc2': 'Once you shop with us and see how fast we are, we\'re confident you won\'t want to buy Nicotine vape juice from anywhere else.',
        'home.fastest.desc3': 'Hard to believe? Try us now! You’ll be happy you did.',
        'home.fastest.buyNow': 'Buy Now!',
        'home.how.title': 'How?',
        'home.how.buying.desc': 'Start by choosing from our delicious Juice Flavors with 4 different Nicotine Strengths and place your order.',
        'home.how.buying.desc.alt': 'Buy NJ2JP Juices',
        'home.how.distro.desc': 'Moments later, we receive your order at our Distribution Center in California.',
        'home.how.distro.desc.alt': 'Distribution Center',
        'home.how.warehouse.desc': 'Our distribution center then quickly prepares your package.',
        'home.how.warehouse.desc.alt': 'Warehouse',
        'home.how.flight.desc': 'A few hours later, your package is put on a direct flight from California to Japan.',
        'home.how.flight.desc.alt': 'Overnight flight',
        'home.how.truck.desc': 'Soon after landing, your package is on a delivery truck, on its way to your Japanese address.',
        'home.how.truck.desc.alt': 'Delivery Truck',
        'home.how.delivery.desc': 'A few days later, you receive your package from Nic Juice 2 Japan. 😁 ',
        'home.how.delivery.desc.alt': 'Delivered',
        'home.how.delivery.desc.buyNow': 'Buy Now!',
        'home.reviews.title': 'Reviews',
        'home.reviews.slide1.blurb': 'Well, NJ2JP wasn’t lying. 5 days to Fukuoka. Way faster than all of my previous online choices. I’m sold.',
        'home.reviews.slide1.author': 'Matt Shipmen',
        'home.reviews.slide2.blurb': 'Wow! Fruity Bamm-Bamm = Delicious.  4 Day Delivery = Fast. My New Juice Source = NJ2JP.',
        'home.reviews.slide2.author': 'Gene Smith, Okinawa',
        'home.reviews.slide3.blurb': 'NicJuice2Japan (NJ2JP) are killing it with these delivery speeds. Not to mention the juice line is delicious.  Looking forward to more juices flavors.',
        'home.reviews.slide3.author': 'Robert McNair, Sasebo',
        'home.reviews.slide4.blurb': 'I placed my order on Monday, by Thursday morning, I was vaping Nicotine e-juice. Nj2jp is blazing fast!',
        'home.reviews.slide4.author': 'Justin Arians, Yokosuka',
        'home.news.title': 'News & Reviews',
        'home.news.article.readMore': 'Read More...',
        'home.news.article.card1.header': 'Air Sampling confirms secondhand vapor is harmless',
        'home.news.article.card1.content': 'The California Department of Public Health (CDPH), has been carrying out air sampling in vape shops throughout the state, as part of its initiative to determine the health effects of second-hand vapor exposure.',
        'home.news.article.card2.header': 'Japan Tobacco playing catchup as nation takes to vaping in big way',
        'home.news.article.card2.content': 'Competition to sate Japanese nicotine addicts is heating up. Philip Morris International Inc. and Japan Tobacco Inc. have rolled out products that are heated — not burned — in battery-charged devices, seeking to appeal to smokers who want their nicotine fix without the usual smell and smoke. The move, part of the rapidly growing global vaping trend, has created a bright spot on Japan’s otherwise bleak tobacco market.',
        'home.news.review.card3.header': 'Vaping shouldn\'t taste this good!?',
        'home.news.review.card3.subHeader': 'By Clark Kent on March 17, 2017',
        'home.news.review.card3.content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        'home.news.article.card4.header': 'Philip Morris, Japan Tobacco to open more vape stores nationwide',
        'home.news.article.card4.content': 'Philip Morris Japan Ltd. said Thursday that it will open a store in Tokyo’s Ginza district on Friday to sell its smokeless tobacco device iQOS. Also on Thursday, Japan Tobacco Inc. opened to the media a special shop in Fukuoka that will sell its smokeless tobacco device Ploom Tech, starting on Friday.',
        'home.news.article.card5.header': 'PMI CEO talks about phasing out cigarettes in Japan   S. Korea',
        'home.news.article.card5.content': 'The CEO of Philip Morris International (PMI), said that due to the popularity of their electronic device, iQOS, in Japan and South Korea, the tobacco company should be able to phase out combustible cigarettes in these countries within five years.  PMI’s iQOS device, is a smokeless alternative to combustible cigarettes and works by heating tobacco leaves known as Heets in Korea and HeatSticks in Japan.',
        'home.news.review.card6.header': 'Saved my Marriage',
        'home.news.review.card6.subheader': 'By Clark Kent on March 17, 2017',
        'home.news.review.card6.content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        'home.news.article.card7.header': 'More data confirms that vaping is a safer alternative to smoking',
        'home.news.article.card7.content': 'The study, Comparative tumor promotion assessment of e-cigarette and cigarettes using the in vitro Bhas 42 cell transformation assay, was conducted by BioReliance, funded by British American Tobacco (BAT) and published on Environmental and Molecular Mutagenesis.',
        'home.news.article.card8.header': 'Michigan US : Smoking on decline partly thanks to e-cigs',
        'home.news.article.card8.content': 'Michigan’s number of new cases of lung cancer peaked in 2007 at 8,161. It was down to 7,538 by 2013, which is the most recent data.” read an article on Michigan News. Since the 80’s, cigarette sales in the state have dropped by two thirds, however the rates of lung cancer are slower in catching up with these figures, as the people who were fervent smokers at that time, are now aging, hence still manifesting cancers.',
        'home.news.article.card9.header': '3 facts smokers should know about vaping',
        'home.news.article.card9.content': 'Smokers don’t seem to be much better informed about vaping than anyone else, which is unfortunate – after all they’re the ones who potentially have most to gain. It isn’t really a surprise though because smokers read the same newspapers, complete with the same alarming stories. Just to help set the record straight here are three facts every smoker should know about e-cigs.',
        'home.news.article.card10.header': 'Absurdity at its Finest, the New War Against Vaping Goes Against Science',
        'home.news.article.card10.content': 'Reminiscent of the days of prohibition, special interest groups are forcing personal beliefs against science, yet again. The ability to enjoy vaping is under attack with restrictive legislation from groups that are ignorant and believe the propaganda they are being fed. How can reason be interjected into this conversation, when popular belief isn’t always accurate?',
        'home.news.article.card11.header': 'Study from Spain confirms effectivity of e-cigarettes',
        'home.news.article.card11.content': 'A Spanish vapers association, Anesvap has released data which confirms what other countless studies have shown. The three main findings were that contrary to what many sources, such as the previous US Surgeon General, have claimed, vaping does not act as a gateway to smoking in young adults, that vaping is not as addictive as smoking, and also that it dramatically reduces smoking rates.',
        'home.news.review.card12.header': 'It wasn\'t hard. It was just different',
        'home.news.review.card12.subHeader': 'By Clark Kent on March 17, 2017',
        'home.news.review.card12.content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        'home.news.article.card13.header': 'Shocking Penn State Study on Vaping and Cigarettes',
        'home.news.article.card13.content': 'A new study out shows that people who use vape devices are less addicted to vaping than traditional smokers. The study, which was reported by Newswise, was conducted by the Penn State College of Medicine, a school that has an estimated $110 million in funded research, most notably in advancements in cancer treatments as well as the understanding of the fundamental causes of disease. It was led by Guodong Liu, an assistant professor of public health sciences at the college; Liu was joined by Emily Wasserman, a biostatistician, and Jonathan Foulds, a professor. Both work in the Department of Public Health Services at the Penn Tobacco Center of Regulatory Science. The study itself was funded by the National Institutes of Health and the Center for Tobacco Products.',
        'home.news.article.card14.header': 'New Study Shows Vaping Less Harmful Again',
        'home.news.article.card14.content': 'A study done by a Big Tobacco company has proven yet again that vaping is less harmful than smoking traditional cigarettes. The Sun is reporting that British American Tobacco, which produces brands like Benson and Hedges, Dunhill and Lucky Strike, funded the new study. The company has also entered into the vape market; it launched their first product in that market in 2013 under the name Vype. The company is also allocating resources to learning more about “alternative tobacco and nicotine products,” signaling that British American Tobacco may be ready to take on a role in the industry.',
        'home.news.article.card15.header': 'I cant belive it was that easy!',
        'home.news.article.card15.subHeader': 'By Clark Kent on March 17, 2017',
        'home.news.article.card15.content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',

        'home.footer.general.title': 'NJ2JP',
        'home.footer.general.aboutUs': 'About Us',
        'home.footer.general.contactUs': 'Contact Us',
        'home.footer.general.vapeNews': 'Vape News',
        'home.footer.general.productReviews': 'Product Reviews',
        'home.footer.general.userStories': 'User Stories',
        'home.footer.customer.title': 'CUSTOMER CARE',
        'home.footer.customer.privacyPolicy': 'Privacy Policy',
        'home.footer.customer.shippingPolicy': 'Shipping Policy',
        'home.footer.customer.returnPolicy': 'Return Policy',
        'home.footer.customer.nicotineDisclaimer': 'Nicotine Disclaimer',
        'home.footer.customer.termsConditions': 'Terms & Conditions',
        'home.footer.contact.title': 'GET IN TOUCH',
        'home.footer.contact.phone': '080-4053-8791',
        'home.footer.contact.email': 'contact@nj2jp.com',
        'home.footer.follow.title': 'FOLLOW US',
        'home.footer.madeWith.title': 'Made with',
        'home.footer.madeWith.subTitle': 'by',

        'form.validation.error.api': 'Invalid entry on form.',
        'form.validation.error.required': 'Required',
        'form.validation.error.bool.required': 'Required',
        'form.validation.error.email': 'EMAIL_VALUE is not an email.',
        'form.validation.error.contactus.name': 'That name uses invalid characters. Please try again.',
        'form.validation.error.contactus.textarea': 'That message uses invalid characters. Please try again.',
        'form.validation.error.contactus.firstLast': 'You must include a First name & a Last name.',
        'form.validation.error.alpha': 'String should contain only letters (a-zA-Z).',
        'form.validation.error.numeric': 'Postal code should only contain numbers (0-9).',
        'form.validation.error.us-zip': 'U.S. Zip Codes must be in (12345) or (12345-6789) format.',
        'form.validation.error.japan-postal': 'Japanese postal codes must be in format (123-4567) or (1234567) and 7 digits long.',
        'form.validation.error.phone-japanLength': 'Not a valid phone number. Acceptable Format: "01234567890" Either 10 digits (Landline) or 11 digits (Cell).',
        'form.validation.error.phone-startWithZero': 'Phone number should start with "0".',
        'form.validation.error.city': 'Not a valid city name.',
        'form.validation.error.ccName': 'That name uses invalid characters. Please try again.',
        'form.validation.error.ccName-firstLast': 'You must include a First name & a Last name.',
        'form.validation.error.contactUsName': 'That name uses invalid characters. Please try again.',
        'form.validation.error.contactUsTextArea': 'That message uses invalid characters. Please try again.',
        'form.validation.error.contactUs-firstLast': 'You must include a First name & a Last name.',
        'form.validation.error.ccNumber': 'Credit Card numbers must be 16 digits & can only have format (1234567891234567) or (1234-5678-9123-4567).',
        'form.validation.error.ccCvn': 'Credit Card CVN numbers should only be 3 digits.',
        'form.validation.error.password': 'Passwords should be equal.',
        'form.validation.error.postalApi': 'Postal code is invalid. See error message for details. Focus to clear.',

        'contactus.header': 'Contact Us',
        'contactus.breadcrumb.paths1': 'Home',
        'contactus.breadcrumb.lastcrumb': 'Contact Us',
        'contactus.label.name': 'Name',
        'contactus.label.email': 'Email',
        'contactus.label.message': 'Message',
        'contactus.input.placeholder.name': 'Enter your name',
        'contactus.input.placeholder.email': 'Enter your email',
        'contactus.input.placeholder.message': 'What would you like to say?',
        'contactus.checkbox.label': 'Send a copy of this email to yourself',
        'contactus.button.label.send': 'Send',
        'contactus.button.label.submitting': 'Submitting...',
        'contactus.button.label.success': 'Success',
        'contactus.button.error.label': 'Error',
      },
    },
    ja: {
      messages: {
        'navbar.login.title': 'ログイン',
        'navbar.cart.total-price': '小計',
        'navbar.cart.cart-button': 'あなたのカート',
        'navbar.cart.link.view-cart': 'カート',
        'navbar.cart.link.checkout': 'チェックアウト',
        'navbar.cart.empty': 'あなたのカートは現在空です',
        'navbar.cart.loading': 'あなたのカートはロード中です...',
        'navbar.cart.promotion.line1': '4ボトルを購入する',
        'navbar.cart.promotion.line2': '25％割引を受ける',
        'navbar.cart.recently-added': '最近追加されたアイテム',
        'navbar.nav.juices.title': 'ジュース',
        'navbar.nav.juices.recommend': '別のジュースブランドを推薦する',
        'navbar.nav.juices.discount.percentage': '10％OFFを受け取る',
        'navbar.nav.juices.discount.reason': 'メンバーになると',
        'navbar.nav.juices.choose-flavor.title': 'フレーバーを選ぶ!',
        'navbar.nav.juices.description.title': 'ニコチンジュース:',
        'navbar.nav.juices.description': 'N2JPはお客様に最高品質の製品とサービスを提供することを誇りにしています。 私たちはあなたとあなたとのビジネス経験がとても良いことを願っています。私たちはあなたのすべてのあなたのvape juice needsのためにあなたの＃1の選択肢になります。 私たちの顧客は私たちを愛しています。 あなたは以下のすべてのジュースのオファーを見つけるでしょう。 ご不明な点がございましたら、お気軽にお問い合わせください。 経験をお楽しみください "スイッチを作る。',
        'navbar.nav.media.title': 'メディア',
        'navbar.nav.contact-us.title': 'お問い合わせ',
        'navbar.nav.juice-reviews.title': 'ジュースレビュー',
        'navbar.nav.vape-news.title': 'ヴェイプニュース',
        'navbar.nav.user-stories.title': 'ユーザーストーリー',
        'navbar.nav.info.title': '情報',
        'navbar.nav.info.links.about': '私たちに関しては',
        'navbar.nav.info.links.faqs': 'FAQs',
        'navbar.nav.info.links.contact-us': 'お問い合わせ',
        'navbar.nav.info.links.shipping-policy': '配送ポリシー',
        'navbar.nav.info.links.return-policy': '返品規則',
        'navbar.nav.info.links.privacy-policy': '個人情報保護方針',
        'navbar.nav.info.links.terms-and-conditions': '利用規約',
        'navbar.nav.info.links.nicotine-disclaimer': 'ニコチンの免責事項',
        'home.header.title': '日本で最速のニコチン電子ジュース納品',
        'home.header.subtitle': '保証付き!',
        'home.header.button.buyNow': '今買う!',
        'home.fastest.title': '最も速い配達',
        'home.fastest.subtitle': '誰も日本ではもっと速い',
        'home.fastest.desc1': '誰も私たちよりも早く日本にニコチンEジュースを届けられません。',
        'home.fastest.desc2': 'あなたが私たちと一緒に買い物をしてどれくらいの速さを見たら、どこからでもニコチンワックスジュースを購入したくないと確信しています。',
        'home.fastest.desc3': '信じがたい？ 今すぐお試しください！ あなたはあなたが幸せになるでしょう。',
        'home.fastest.buyNow': '今買う!',
        'home.how.title': 'どうやって？',
        'home.how.buying.desc': '4種類のニコチンの強さを持つ美味しいジュースフレーバーを選んで注文してください。',
        'home.how.buying.desc.alt': 'NJ2JPジュースを購入する',
        'home.how.distro.desc': 'その後、カリフォルニア州の流通センターで注文を受け取ります。',
        'home.how.distro.desc.alt': '流通センター',
        'home.how.warehouse.desc': '私たちの流通センターはすぐにあなたのパッケージを準備します。',
        'home.how.warehouse.desc.alt': '倉庫',
        'home.how.flight.desc': '数時間後、あなたのパッケージはカリフォルニアから日本への直行便に乗せられます。',
        'home.how.flight.desc.alt': '一晩のフライト',
        'home.how.truck.desc': '着陸後すぐに、あなたのパッケージはあなたの日本の住所に向かう途中で配送トラックに乗っています。',
        'home.how.truck.desc.alt': '配送トラック',
        'home.how.delivery.desc': '数日後、Nic Juice 2 Japanからパッケージを受け取ります。 😁 ',
        'home.how.delivery.desc.alt': '届いた',
        'home.how.delivery.desc.buyNow': '今買う!',
        'home.reviews.title': 'レビュー',
        'home.reviews.slide1.blurb': 'さて、NJ2JPは横たわっていませんでした。 福岡まで5日間。 これまでのオンラインの選択肢よりもずっと速い。 私は確信しています。',
        'home.reviews.slide1.author': 'マットシップメン',
        'home.reviews.slide2.blurb': 'うわー！ 果肉Bamm-Bamm =おいしい。 4日の配達=速い。 私の新しいジュースソース= NJ2JP。',
        'home.reviews.slide2.author': 'ジーンスミス、沖縄',
        'home.reviews.slide3.blurb': 'NicJuice2Japanは、これらの配信速度でそれを殺しています。 ジュースラインはもちろん、おいしいです。 もっとジュースの風味を楽しみにしています。',
        'home.reviews.slide3.author': 'ロバート・マクネア、佐世保',
        'home.reviews.slide4.blurb': '私は月曜日に注文しました。木曜日の朝までに、私はニコチン電子ジュースを食べていました。 Nj2jpはすごく速いです！',
        'home.reviews.slide4.author': 'ジャスティン・アリアンズ、横須賀',
        'home.news.title': 'ニュース＆レビュー',
        'home.news.article.readMore': '続きを読む...',
        'home.news.article.card1.header': '空気サンプリングは、間接蒸気が無害であることを確認する',
        'home.news.article.card1.content': 'カリフォルニア州公衆衛生局（CDPH）は、間接蒸気曝露の健康影響を決定するイニシアチブの一環として、州全体の倉庫で空気サンプリングを実施しています.',
        'home.news.article.card2.header': '日本がタバコを食い止め、大国になっていく',
        'home.news.article.card2.content': '日本人のニコチン中毒者の競争が激化している。 Philip Morris International Inc.とJapan Tobacco Inc.は、通常の匂いや煙のないニコチンを欲しがる喫煙者にアピールするために、電池を充電した機器で加熱されたもの（燃えていないもの）を出しました。 急速に拡大している世界的な穀物流通の一環であるこの動きは、日本の荒廃したたばこ市場.',
        'home.news.review.card3.header': 'ワイピングはこの味を味わってはいけません！',
        'home.news.review.card3.subHeader': '2017年3月17日のCarl Stephanapolous',
        'home.news.review.card3.content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        'home.news.article.card4.header': 'フィリップモリス、日本全国のたばこ店を開店',
        'home.news.article.card4.content': 'フィリップ・モリス・ジャパンは、金曜日に東京の銀座地区に無煙たばこのiQOSを販売する店舗をオープンすると発表した。 また、木曜日に、日本のたばこ会社は福岡に無煙たばこ機「Ploom Tech」を販売する特別店をメディアにオープンした。',
        'home.news.article.card5.header': 'PMIのCEO、日本のタバコの段階的廃止について語る',
        'home.news.article.card5.content': 'フィリップ・モリス・インターナショナル（PMI）の最高経営責任者（CEO）は、電子機器iQOSの日本と韓国での人気のため、タバコ会社は5年以内にこれらの国々で可燃性紙巻きタバコを廃止できるはずだと述べた。 PMIのiQOS装置は、可燃性のたばこの無煙代替品であり、韓国のヒートと日本のヒート・スティックと呼ばれるタバコの葉を加熱することで動作します。',
        'home.news.review.card6.header': '私の結婚を救った',
        'home.news.review.card6.subheader': 'By Clark Kent on March 17, 2017',
        'home.news.review.card6.content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        'home.news.article.card7.header': 'より多くのデータは、授乳が喫煙のより安全な選択肢であることを確認している',
        'home.news.article.card7.content': 'インビトロBhas 42細胞形質転換アッセイを用いた電子タバコおよびタバコの比較腫瘍促進評価は、BioReliance（British American Tobacco（BAT）による資金提供を受け、Environmental and Molecular Mutagenesisに掲載）により実施された。',
        'home.news.article.card8.header': 'ミシガン州米国：e-cigsのおかげで部分的に喫煙喫煙',
        'home.news.article.card8.content': 'ミシガン州の肺癌の新たな症例数は2007年に8,161にピークに達した。 最新のデータである2013年までに7,538人になった」とミシガン・ニュースの記事を読んだ。 80年代以来、州のタバコ販売は3分の2に減少しましたが、熱い喫煙者であった人々が現在老化しており、それゆえ癌を発症しているため、これらの数字に追いつくのに肺がん率は遅くなります。',
        'home.news.article.card9.header': '喫煙者は栄養について知っておくべき3つの事実',
        'home.news.article.card9.content': '喫煙者は、他の誰よりも飢えを知っているようには思えません。不幸なことですが、結局のところ、彼らは潜在的に最も得意とする人です。 喫煙者が同じ新聞を読んで、同じ驚くべき物語を完成させたので、それは本当に驚きではありません。 レコードを真っ直ぐにするのを助けるのは、喫煙者が電子cigについて知っておくべき3つの事実です。',
        'home.news.article.card10.header': '最悪の不条理、科学的に暴行する新戦争',
        'home.news.article.card10.content': '禁断の時代を思い起こさせる特別な利益団体は、科学に対する個人的な信念を強要しています。 vapingを楽しむ能力は無知であり、彼らが養子になっている宣伝を信じているグループからの制限的な法律によって攻撃を受けている。 普遍的な信念が必ずしも正確ではないときに、この会話にどのようにして理由を入れることができますか？',
        'home.news.article.card11.header': 'スペインからの研究が電子タバコの有効性を確認',
        'home.news.article.card11.content': 'スペインの弁当協会、Anesvapは他の無数の研究が示していることを確認するデータを発表しました。 3つの主な所見は、前回の米国外科医のような多くの情報源が主張してきたこととは対照的に、若い成人の喫煙の玄関口ではなく、喫煙は喫煙ほど中毒ではなく、 喫煙率を低下させる。',
        'home.news.review.card12.header': 'それは難しくありませんでした。 それはただ違っていた',
        'home.news.review.card12.subHeader': 'By Clark Kent on March 17, 2017',
        'home.news.review.card12.content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        'home.news.article.card13.header': 'ビーピングとたばこに関するショッキングペンの国家研究',
        'home.news.article.card13.content': '新しい研究では、vapeデバイスを使用する人々が伝統的な喫煙者に比べて野菜の摂取量に殆ど依存していないことが示されています。 Newswiseによって報告されたこの研究は、ペンストン州立医科大学（Penn State College of Medicine）によって行われました。この学校は、資金療法の研究で1億1000万ドル、特に癌治療の進歩と病気の根本的原因の理解が最も顕著です。 それは、大学の公衆衛生科学の助教授、Guodong Liuによって率いられた。 劉氏は、生物統計学者のエミリー・ワッサーマンと、教授のジョナサン・フォルズが参加しました。 両者は、ペン・タバコ規制科学センターの公衆衛生サービス局で働いています。 研究自体は、国立衛生研究所とタバコ製品センターが資金提供していました。',
        'home.news.article.card14.header': '新たな研究では、',
        'home.news.article.card14.content': 'ビッグ・タバコ社が行った調査によると、タバコは伝統的なタバコを吸うよりも有害ではないことがもう一度証明されています。 Sunは、BensonやHedges、Dunhill、Lucky Strikeなどのブランドを生産するBritish American Tobaccoが新しい研究に資金を提供したと報告しています。 同社はまた、vape市場に参入した。 Vypeという名前で2013年にその市場に最初の製品を投入しました。 同社は、「代替タバコとニコチン製品」の詳細を学ぶためのリソースを配分しており、British American Tobaccoが業界での役割を果たす準備ができている可能性があることを示しています。',
        'home.news.article.card15.header': '私はそれが簡単だったとは信じられない！',
        'home.news.article.card15.subHeader': 'By Clark Kent on March 17, 2017',
        'home.news.article.card15.content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        'home.footer.general.title': 'NJ2JP',
        'home.footer.general.aboutUs': '私たちに関しては',
        'home.footer.general.contactUs': 'お問い合わせ',
        'home.footer.general.vapeNews': 'ヴェブ・ニュース',
        'home.footer.general.productReviews': '商品レビュー',
        'home.footer.general.userStories': 'ユーザーストーリー',
        'home.footer.customer.title': 'カスタマーケア',
        'home.footer.customer.privacyPolicy': '個人情報保護方針',
        'home.footer.customer.shippingPolicy': '配送ポリシー',
        'home.footer.customer.returnPolicy': '返品規則',
        'home.footer.customer.nicotineDisclaimer': 'ニコチンの免責事項',
        'home.footer.customer.termsConditions': '利用規約',
        'home.footer.contact.title': '連絡を取り合う',
        'home.footer.contact.phone': '080-4053-8791',
        'home.footer.contact.email': 'contact@nj2jp.com',
        'home.footer.follow.title': 'フォローする',
        'home.footer.madeWith.title': '作られ',
        'home.footer.madeWith.subTitle': 'による',

        'product.single.loading': 'Loading...',
        'product.breadcrumb.paths1': 'Home',
        'product.breadcrumb.lastCrumb': 'Juice Page',
        'product.modal.bulk.title': 'Lets make a Deal!',
        'product.modal.bulk.subtitle1': 'BUY 4 BOTTLES',
        'product.modal.bulk.subtitle2': 'and we\'ll slice',
        'product.modal.bulk.subtitle3': 'the price.',
        'product.modal.bulk.title.example': 'Example:',
        'product.modal.bulk.header.qty': 'QTY',
        'product.modal.bulk.header.description': 'Description',
        'product.modal.bulk.header.price': 'Price',
        'product.modal.bulk.row.qty': '4',
        'product.modal.bulk.row.flavor': 'Fruity Bamm-Bamm',
        'product.modal.bulk.row.strength': 'Nicotine Strength:',
        'product.modal.bulk.row.subtotal': 'Subtotal',
        'product.modal.bulk.row.tax': 'Tax',
        'product.modal.bulk.row.discount': 'Discount',
        'product.modal.bulk.row.shipping': 'Free International Shipping',
        'product.modal.bulk.row.total': 'Grand Total',
        'product.modal.bulk.btns.close': 'Close',
        'product.modal.bulk.msg.oh': 'Oh!',
        'product.modal.bulk.msg.mention': 'Did we mention you get',
        'product.modal.bulk.msg.intl-shipping': 'International Shipping!',
        'product.modal.bulk.msg.lets-do-it': 'Let\'s Do It!',
        'product.modal.register.title': 'Not A Member Yet?',
        'product.modal.register.become': 'Become a member and get',
        'product.modal.register.first-order': 'your first order!',
        'product.modal.register.discount-also': 'Also,',
        'product.modal.register.discount-bottles': 'Buy 4 Bottles',
        'product.modal.register.discount-additional': 'and get an additional',
        'product.modal.register.discount-whoah': 'Whoah! That\'s',
        'product.modal.register.discount-example': 'Example: ',
        'product.modal.register.header.qty': 'QTY',
        'product.modal.register.header.description': 'Juice Description',
        'product.modal.register.header.price': 'Price',
        'product.modal.register.row.flavor': 'Fruity Bamm-Bamm',
        'product.modal.register.row.strength': 'Nicotine Strength: ',
        'product.modal.register.row.subtotal': 'Subtotal',
        'product.modal.register.row.tax': 'Tax',
        'product.modal.register.row.discount': 'Discount',
        'product.modal.register.row.shipping': 'Free International Shipping',
        'product.modal.register.row.total': 'Grand Total',
        'product.modal.register.btns.close': 'Close',
        'product.modal.register.btns.sign-up': 'Sign Me Up',
        'product.modal.success.juices-have': 'juices have',
        'product.modal.success.juice-has': 'juices have',
        'product.modal.success.added-msg': 'been successfully added to your cart',
        'product.modal.success.continue-shopping': 'Continue Shopping',
        'product.modal.success.express-checkout': 'Express Checkout',

        'form.validation.error.api': 'フォームの入力が無効です。',
        'form.validation.error.required': '必須',
        'form.validation.error.bool.required': '必須',
        'form.validation.error.email': 'EMAIL_VALUEは有効なメールではありません。',
        'form.validation.error.contactus.name': 'その名前は無効な文字を使用します。 もう一度お試しください。',
        'form.validation.error.contactus.textarea': 'そのメッセージは無効な文字を使用します。 もう一度お試しください。',
        'form.validation.error.contactus.firstLast': 'あなたはファーストネームとラストネームを含める必要があります。',
        'form.validation.error.alpha': '文字列には文字（a-zA-Z）のみを使用する必要があります。',
        'form.validation.error.numeric': '郵便番号には数字（0〜9）のみを含める必要があります。',
        'form.validation.error.us-zip': 'アメリカの郵便番号は、（12345）または（12345-6789）の形式である必要があります。',
        'form.validation.error.japan-postal': '日本の郵便番号は、書式（123-4567）または（1234567）と7桁の長さでなければなりません。',
        'form.validation.error.phone-japanLength': '有効な電話番号ではありません。 受け入れ可能なフォーマット： "01234567890" 10桁（固定電話）または11桁（セル）。',
        'form.validation.error.phone-startWithZero': '電話番号は「0」で始まる必要があります。',
        'form.validation.error.city': '有効な都市名ではありません。',
        'form.validation.error.ccName': 'その名前は無効な文字を使用します。 もう一度お試しください。',
        'form.validation.error.ccName-firstLast': 'あなたはファーストネームとラストネームを含める必要があります。',
        'form.validation.error.contactUsName': 'その名前は無効な文字を使用します。 もう一度お試しください。',
        'form.validation.error.contactUsTextArea': 'そのメッセージは無効な文字を使用します。 もう一度お試しください。',
        'form.validation.error.contactUs-firstLast': 'あなたはファーストネームとラストネームを含める必要があります。',
        'form.validation.error.ccNumber': 'クレジットカード番号は16桁でなければなりません。フォーマットは（1234567891234567）または（1234-5678-9123-4567）のみです。',
        'form.validation.error.ccCvn': 'クレジットカードのCVN番号は3桁でなければなりません。',
        'form.validation.error.password': 'パスワードは等しくなければなりません。',
        'form.validation.error.postalApi': '郵便番号が無効です。 詳細については、エラーメッセージを参照してください。 焦点を明確にする。',


        'contactus.header': 'お問い合わせ',
        'contactus.breadcrumb.paths1': '自宅',
        'contactus.breadcrumb.lastcrumb': 'お問い合わせ',
        'contactus.label.name': '名前',
        'contactus.label.email': '電子メイル',
        'contactus.label.message': 'メッセージ',
        'contactus.input.placeholder.name': 'あなたの名前を入力してください',
        'contactus.input.placeholder.email': 'メールアドレスを入力してください',
        'contactus.input.placeholder.message': 'あなたは何を言いたいのですか？',
        'contactus.checkbox.label': 'あなたにこのメールのコピーを送ってください',
        'contactus.button.label.send': '送る',
        'contactus.button.label.submitting': 'プロセッシング。。。',
        'contactus.button.label.success': 'サクセス',
        'contactus.button.error.label': 'エラー',
      },
    },
  },
};
