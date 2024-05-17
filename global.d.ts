import uk from './messages/uk.json';

type Localizations = typeof uk;

declare global {
	interface IntlLocalizations extends Localizations {}
}
