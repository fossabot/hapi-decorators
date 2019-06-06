import { ServerRoute } from '@hapi/hapi';
import { BaseModule } from '../lib/BaseModule';

export type IRouteConfig = { config: ServerRoute; target: any };

const routesConfig: Symbol = Symbol('@streamjar/hapi-decorators:routes-config');

/**
 * Fetch all route configurations for a given module.
 *
 * @param target Module
 */
export function getRoutesConfig(target: typeof BaseModule): IRouteConfig[] {
	if (!Reflect.hasMetadata(routesConfig, target)) {
		return [];
	}

	return Reflect.getMetadata(routesConfig, target);
}

function handleRestMethod(method: string, path: string | ServerRoute): Function {
	const opts: ServerRoute = typeof path === 'string' ? { method, path } : path;

	return (target: any, _: string, descriptor: PropertyDescriptor): void => {
		opts.handler = descriptor.value;

		Reflect.defineMetadata(routesConfig, getRoutesConfig(target.constructor).concat({ config: opts, target }), target.constructor);
	};
}

/**
 * Handle a GET method.
 *
 * @param path Path to the route OR a hapi route config
 */
export function GetDecorator(path: string | ServerRoute = ''): Function {
	return handleRestMethod('GET', path);
}

/**
 * Handle a POST method.
 *
 * @param path Path to the route OR a hapi route config
 */
export function PostDecorator(path: string | ServerRoute = ''): Function {
	return handleRestMethod('POST', path);
}

/**
 * Handle a PUT method.
 *
 * @param path Path to the route OR a hapi route config
 */
export function PutDecorator(path: string | ServerRoute = ''): Function {
	return handleRestMethod('PUT', path);
}

/**
 * Handle a PATCH method.
 *
 * @param path Path to the route OR a hapi route config
 */
export function PatchDecorator(path: string | ServerRoute = ''): Function {
	return handleRestMethod('PATCH', path);
}

/**
 * Handle a DELETE method.
 *
 * @param path Path to the route OR a hapi route config
 */
export function DeleteDecorator(path: string | ServerRoute = ''): Function {
	return handleRestMethod('DELETE', path);
}