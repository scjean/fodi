      /**
       * SCF_GATEWAY：SCF 云函数网关地址
       * SITE_NAME：站点名称
       */
      window.GLOBAL_CONFIG = {
        SCF_GATEWAY: "//work.365ss.top",
        SITE_NAME: "FODI",
        IS_CF: true,
      };
      if (window.GLOBAL_CONFIG.SCF_GATEWAY.indexOf("workers") === -1) {
        window.GLOBAL_CONFIG.SCF_GATEWAY += "/fodi/";
        window.GLOBAL_CONFIG.IS_CF = false;
      }
      // if (location.protocol === 'http:') {
      //     location.href = location.href.replace(/http/, 'https');
      // }