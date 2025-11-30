import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    doctor_image: Schema.Attribute.Media<'images'>;
    experience_title: Schema.Attribute.String;
    experience_years: Schema.Attribute.Integer;
    patient_served_number: Schema.Attribute.Integer;
    patient_served_title: Schema.Attribute.String;
    short_description: Schema.Attribute.Text;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionChiefConsultant extends Struct.ComponentSchema {
  collectionName: 'components_section_chief_consultants';
  info: {
    displayName: 'Chief Consultant';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.banner': BlocksBanner;
      'section.chief-consultant': SectionChiefConsultant;
    }
  }
}
