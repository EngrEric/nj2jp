export default ({ orders, user, geo, locale, mobile }, auth0Profile) => {
  const profile = {
    name: {
      first: auth0Profile.given_name,
      last: auth0Profile.family_name,
      display: auth0Profile.name,
    },
    pictures: {
      small: auth0Profile.picture,
      large: auth0Profile.picture_large,
    },
    authentication: {
      signedUp: new Date(),
      password: '',
      createdAt: auth0Profile.created_at,
      totalLogins: 1,
      lastLogin: new Date(),
      loginDevice: mobile.mobileType || 'computer',
      ageVerified: user.ageVerified,
      auth0Identities: [...auth0Profile.identities],
    },
    contactInfo: {
      email: '',
      phone: '',
      locale: auth0Profile.locale,
      timezone: auth0Profile.timezone,
      location: {
        ipAddress: geo.ipAddress,
        lat: geo.latLong.split(',')[0],
        long: geo.latLong.split(',')[1],
        country: locale.country,
      },
      devices: [...auth0Profile.devices],
      socialNetworks: [],
    },
    shopping: {
      cart: [],
    },
    permissions: {
      role: 'user',
    },
    userStory: {
      age: auth0Profile.age_range,
      bio: '',
      gender: auth0Profile.gender,
    },
    socialProfileBlob: {
      facebook: JSON.stringify(auth0Profile, null, 2),
    },
  };

  profile.contactInfo.socialNetworks.push({
    type: 'Facebook',
    link: auth0Profile.link,
  });
  if (orders.guest.length) {
    orders.guest.forEach(({ id: product, qty, strength }) => {
      profile.shopping.cart.push({ qty, strength, product });
    });
  }
  return profile;
};
