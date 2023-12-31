<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInite190331c8c5d43bc3ea5a991e36843af
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInite190331c8c5d43bc3ea5a991e36843af', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInite190331c8c5d43bc3ea5a991e36843af', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInite190331c8c5d43bc3ea5a991e36843af::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
