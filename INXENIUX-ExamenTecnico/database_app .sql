-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-08-2023 a las 01:45:36
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database_app`
--

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `all_data`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `all_data` (
`id` int(100)
,`Nombre` varchar(250)
,`Ap_Paterno` varchar(200)
,`Ap_Materno` varchar(200)
,`Edad` int(3)
,`Sexo` varchar(10)
,`Calle` varchar(100)
,`N_Int` int(10)
,`N_Ext` int(10)
,`Colonia` varchar(100)
,`Municipio` varchar(100)
,`Estado` varchar(100)
,`I_pers` varchar(100)
,`D_Pref` varchar(100)
,`T_Hab` varchar(100)
,`I_Mens` varchar(100)
,`V_año` varchar(100)
,`Libros` varchar(30)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccions`
--

CREATE TABLE `direccions` (
  `id` int(11) NOT NULL,
  `Calle` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `N_Int` int(10) DEFAULT NULL,
  `N_Ext` int(10) DEFAULT NULL,
  `Colonia` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `Municipio` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `Estado` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generales`
--

CREATE TABLE `generales` (
  `id` int(100) NOT NULL,
  `Nombre` varchar(250) NOT NULL,
  `Ap_Paterno` varchar(200) NOT NULL,
  `Ap_Materno` varchar(200) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Sexo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `particulares`
--

CREATE TABLE `particulares` (
  `id` int(11) NOT NULL,
  `I_pers` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `D_Pref` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `T_Hab` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `I_Mens` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `V_año` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `Libros` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura para la vista `all_data`
--
DROP TABLE IF EXISTS `all_data`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `all_data`  AS SELECT `g`.`id` AS `id`, `g`.`Nombre` AS `Nombre`, `g`.`Ap_Paterno` AS `Ap_Paterno`, `g`.`Ap_Materno` AS `Ap_Materno`, `g`.`Edad` AS `Edad`, `g`.`Sexo` AS `Sexo`, `d`.`Calle` AS `Calle`, `d`.`N_Int` AS `N_Int`, `d`.`N_Ext` AS `N_Ext`, `d`.`Colonia` AS `Colonia`, `d`.`Municipio` AS `Municipio`, `d`.`Estado` AS `Estado`, `p`.`I_pers` AS `I_pers`, `p`.`D_Pref` AS `D_Pref`, `p`.`T_Hab` AS `T_Hab`, `p`.`I_Mens` AS `I_Mens`, `p`.`V_año` AS `V_año`, `p`.`Libros` AS `Libros` FROM ((`generales` `g` join `direccions` `d` on(`g`.`id` = `d`.`id`)) join `particulares` `p` on(`g`.`id` = `p`.`id`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `direccions`
--
ALTER TABLE `direccions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `generales`
--
ALTER TABLE `generales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `particulares`
--
ALTER TABLE `particulares`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `direccions`
--
ALTER TABLE `direccions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `generales`
--
ALTER TABLE `generales`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `particulares`
--
ALTER TABLE `particulares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
