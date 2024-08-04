import type { Schema, Attribute } from '@strapi/strapi';

export interface MainVideoList extends Schema.Component {
  collectionName: 'components_main_video_lists';
  info: {
    displayName: 'video list';
    description: '';
  };
  attributes: {
    youtubeLink: Attribute.Component<'base.string', true>;
  };
}

export interface MainTabs extends Schema.Component {
  collectionName: 'components_main_tabs';
  info: {
    displayName: 'tabs';
  };
  attributes: {
    tabs: Attribute.Component<'base.tab', true>;
  };
}

export interface MainServices extends Schema.Component {
  collectionName: 'components_main_services';
  info: {
    displayName: 'services';
    description: '';
  };
  attributes: {
    service: Attribute.Component<'base.image-text-section', true>;
    title: Attribute.String;
  };
}

export interface MainMenuItems extends Schema.Component {
  collectionName: 'components_main_menu_items';
  info: {
    displayName: 'menu items';
  };
  attributes: {
    item: Attribute.Component<'base.string', true>;
  };
}

export interface MainLogoList extends Schema.Component {
  collectionName: 'components_main_logo_lists';
  info: {
    displayName: 'logo list';
    description: '';
  };
  attributes: {
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface MainImageCarousel extends Schema.Component {
  collectionName: 'components_image_image_carousels';
  info: {
    displayName: 'image list';
    description: '';
  };
  attributes: {
    images: Attribute.Media<'images', true>;
  };
}

export interface BaseTab extends Schema.Component {
  collectionName: 'components_base_tabs';
  info: {
    displayName: 'tab';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BaseString extends Schema.Component {
  collectionName: 'components_base_strings';
  info: {
    displayName: 'text';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface BaseImageTextSection extends Schema.Component {
  collectionName: 'components_base_image_text_sections';
  info: {
    displayName: 'image text section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'main.video-list': MainVideoList;
      'main.tabs': MainTabs;
      'main.services': MainServices;
      'main.menu-items': MainMenuItems;
      'main.logo-list': MainLogoList;
      'main.image-carousel': MainImageCarousel;
      'base.tab': BaseTab;
      'base.string': BaseString;
      'base.image-text-section': BaseImageTextSection;
    }
  }
}
