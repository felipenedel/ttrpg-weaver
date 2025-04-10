import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./services/i18n/request.ts");

const config: NextConfig = {};

export default withNextIntl(config);
